import { useState, useRef, useEffect, useCallback } from 'react';

const useAudio = (audioSrc: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8); // Default volume

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = volume;

    const setAudioData = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    const setAudioTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0); // Reset after playback
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', setAudioData);
      audioRef.current.addEventListener('timeupdate', setAudioTime);
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadeddata', setAudioData);
        audioRef.current.removeEventListener('timeupdate', setAudioTime);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null; // Clean up
      }
    };
  }, [audioSrc, volume]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const changeVolume = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    play,
    pause,
    togglePlayPause,
    seek,
    changeVolume,
    audioRef, // Expose audioRef if needed for direct manipulation (e.g., sound effects)
  };
};

export default useAudio;