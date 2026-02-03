import { useState, useRef, useEffect, useCallback } from 'react';

// --- IMPORTACIÓN DE ASSETS ---
import song1 from '../../assets/martinika_song.mp3';
import song2 from '../../assets/martinika_song2.mp3';

import clickSoundFile from '../../assets/cassette-click.wav';
import staticSoundFile from '../../assets/vhs-static.wav';

import art1 from '../../assets/cassette-tape-art.jpg'; 
import art2 from '../../assets/cassette-tape-art2.png'; 

// --- DEFINICIÓN DE LA CONSTANTE (GLOBAL) ---
export const PLAYLIST = [
    { id: 1, title: "Martinika - Demo 1", src: song1, art: art1 },
    { id: 2, title: "Martinika - Demo 2", src: song2, art: art2 }
];

export const usePlayerLogic = () => {
    // Referencias
    const audioRef = useRef<HTMLAudioElement>(new Audio());
    const clickRef = useRef<HTMLAudioElement | null>(null);
    const staticRef = useRef<HTMLAudioElement | null>(null);

    // Estados
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isChangingTrack, setIsChangingTrack] = useState(false);

    // USAMOS LA CONSTANTE GLOBAL 'PLAYLIST' AQUÍ
    const currentTrack = PLAYLIST[currentTrackIndex];

    // 1. INICIALIZACIÓN
    useEffect(() => {
        clickRef.current = new Audio(clickSoundFile);
        staticRef.current = new Audio(staticSoundFile);
        staticRef.current.loop = true;
        
        // Configuración inicial del audio
        audioRef.current.src = currentTrack.src;
        audioRef.current.volume = volume;

        return () => {
            audioRef.current.pause();
            staticRef.current?.pause();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 2. LISTENERS
    useEffect(() => {
        const audio = audioRef.current;

        const setAudioData = () => {
            if (!isNaN(audio.duration) && audio.duration !== Infinity) {
                setDuration(audio.duration);
            }
        };

        const setAudioTime = () => setCurrentTime(audio.currentTime);
        
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            staticRef.current?.pause();
        };

        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    // 3. DETECCIÓN DE CAMBIO DE PISTA (Lógica Core)
    useEffect(() => {
        const audio = audioRef.current;
        
        // Comparamos si el src actual del audio es diferente al de la pista seleccionada
        // (Usamos PLAYLIST global para asegurar referencia correcta)
        const trackSrc = PLAYLIST[currentTrackIndex].src;

        // Nota: audio.src suele devolver la URL completa (http://...), trackSrc es relativa
        // Verificamos si necesitamos cargar
        if (!audio.src.includes(trackSrc) && audio.src !== trackSrc) {
            
            audio.src = trackSrc;
            audio.load();
            
            if (isPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            staticRef.current?.play().catch(() => {});
                        })
                        .catch(error => console.log("Playback prevented:", error));
                }
            }
        }
    }, [currentTrackIndex, isPlaying]);

    // 4. VOLUMEN
    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume;
        if (staticRef.current) staticRef.current.volume = volume === 0 ? 0 : Math.max(0.05, volume * 0.2);
    }, [volume]);

    // --- ACCIONES ---

    const playClickSound = () => {
        if (clickRef.current) {
            clickRef.current.currentTime = 0;
            clickRef.current.play().catch(() => {});
        }
    };

    const togglePlay = useCallback(() => {
        playClickSound();
        const audio = audioRef.current;

        if (isPlaying) {
            audio.pause();
            staticRef.current?.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch(e => console.error(e));
            staticRef.current?.play().catch(e => console.error(e));
            setIsPlaying(true);
        }
    }, [isPlaying]);

    const seek = useCallback((time: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    }, []);

    const changeVolume = useCallback((newVol: number) => setVolume(newVol), []);

    const changeTrack = useCallback((index: number) => {
        if (index === currentTrackIndex) return;
        
        playClickSound();
        
        // Animación
        setIsChangingTrack(true);
        setTimeout(() => setIsChangingTrack(false), 800); 

        // Forzar estado de reproducción y cambio de índice
        setIsPlaying(true);
        setCurrentTrackIndex(index);
    }, [currentTrackIndex]);

    const stop = useCallback(() => {
        playClickSound();
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        staticRef.current?.pause();
        setIsPlaying(false);
        setCurrentTime(0);
    }, []);

    return {
        isPlaying, 
        currentTime, 
        duration, 
        volume, 
        currentTrack, 
        isChangingTrack, 
        // AQUÍ EXPORTAMOS 'playlist' PARA QUE EL COMPONENTE LO USE
        playlist: PLAYLIST, 
        togglePlay, 
        seek, 
        changeVolume, 
        changeTrack, 
        stop
    };
};