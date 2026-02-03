import React, { useState, useRef, useEffect } from 'react';
import { usePlayerLogic } from './usePlayerLogic';
import './player-styles.css';

// --- ASSETS GENERALES ---
import cassetteMask from '../../assets/cassette-mask.png';
import tapeReel from '../../assets/tape-reel.png';
import controlRackBase from '../../assets/control-rack-base.png';
import walkmanBody from '../../assets/walkman-body.png';
import vinylOverlay from '../../assets/vinyl-texture-overlay.png';
import sidePanelBase from '../../assets/side-panel.png';
import volumeKnobImg from '../../assets/volume-knob.png';

// --- ASSETS DE BOTONES (PNG) ---
import btnPlayIdle from '../../assets/btn-play-idle.png';
import btnPlayActive from '../../assets/btn-play-active.png';
import btnStopIdle from '../../assets/btn-stop-idle.png';
import btnStopActive from '../../assets/btn-stop-active.png';
import btnPrevIdle from '../../assets/btn-prev-idle.png';
import btnPrevActive from '../../assets/btn-prev-active.png';
import btnNextIdle from '../../assets/btn-next-idle.png';
import btnNextActive from '../../assets/btn-next-active.png';

// --- ASSETS REDES SOCIALES ---
import btnIgIdle from '../../assets/btn-ig-idle.png';
import btnIgActive from '../../assets/btn-ig-active.png';
import btnSpotyIdle from '../../assets/btn-spoty-idle.png';
import btnSpotyActive from '../../assets/btn-spoty-active.png';
import btnYtIdle from '../../assets/btn-yt-idle.png';
import btnYtActive from '../../assets/btn-yt-active.png';

export const PlayerDesktop: React.FC = () => {
    // 1. Lógica del Reproductor
    const { 
        isPlaying, togglePlay, currentTime, duration, seek, volume, changeVolume,
        currentTrack, isChangingTrack, playlist, changeTrack, stop
    } = usePlayerLogic();

    // 2. Estados Visuales (Botones Player)
    const [isPlayPressed, setIsPlayPressed] = useState(false);
    const [isStopPressed, setIsStopPressed] = useState(false);
    const [isPrevPressed, setIsPrevPressed] = useState(false);
    const [isNextPressed, setIsNextPressed] = useState(false);

    // 3. Estados Visuales (Botones Redes)
    const [isIgPressed, setIsIgPressed] = useState(false);
    const [isSpotyPressed, setIsSpotyPressed] = useState(false);
    const [isYtPressed, setIsYtPressed] = useState(false);

    // 4. Lógica Knob Volumen
    const knobRef = useRef<HTMLDivElement>(null);
    const [isDraggingKnob, setIsDraggingKnob] = useState(false);
    const MIN_ANGLE = -135;
    const MAX_ANGLE = 135;

    const volumeToAngle = (vol: number) => MIN_ANGLE + (vol * (MAX_ANGLE - MIN_ANGLE));

    const handleKnobMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDraggingKnob(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDraggingKnob || !knobRef.current) return;
            const rect = knobRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            let angleDeg = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
            angleDeg = angleDeg - 90; 
            if (angleDeg < -180) angleDeg += 360;
            if (angleDeg < MIN_ANGLE) angleDeg = MIN_ANGLE;
            if (angleDeg > MAX_ANGLE) angleDeg = MAX_ANGLE;
            const newVol = (angleDeg - MIN_ANGLE) / (MAX_ANGLE - MIN_ANGLE);
            changeVolume(Math.max(0, Math.min(1, newVol)));
        };
        const handleMouseUp = () => setIsDraggingKnob(false);

        if (isDraggingKnob) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDraggingKnob, changeVolume]);

    // LEDs Knob
    const renderLeds = () => {
        const leds = [];
        const totalLeds = 11; 
        const radius = 42; 
        for (let i = 0; i < totalLeds; i++) {
            const pct = i / (totalLeds - 1);
            const angle = MIN_ANGLE + (pct * (MAX_ANGLE - MIN_ANGLE));
            const rad = angle * (Math.PI / 180);
            const isActive = volume >= pct;
            const x = 50 + radius * Math.sin(rad); 
            const y = 50 - radius * Math.cos(rad); 
            leds.push(
                <div key={i} className={`knob-led ${isActive ? 'active' : ''}`}
                    style={{ left: `${x}%`, top: `${y}%` }} />
            );
        }
        return leds;
    };

    // 5. Barra Tiempo
    const totalSegments = 25; 
    const activeSegments = duration ? Math.floor((currentTime / duration) * totalSegments) : 0;
    const handleSegmentClick = (index: number) => seek((index / totalSegments) * duration);
    const getSegmentClass = (index: number, isActive: boolean) => {
        if (!isActive) return 'segment';
        const pct = index / totalSegments;
        if (pct < 0.16) return 'segment spec-1'; 
        if (pct < 0.32) return 'segment spec-2'; 
        if (pct < 0.48) return 'segment spec-3'; 
        if (pct < 0.64) return 'segment spec-4'; 
        if (pct < 0.80) return 'segment spec-5'; 
        return 'segment spec-6';                 
    };

    // 6. Vol Fader
    const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const usefulWidth = rect.width * 0.9;
        changeVolume(Math.max(0, Math.min(1, (e.clientX - rect.left) / usefulWidth)));
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleNext = () => changeTrack((playlist.findIndex(t => t.id === currentTrack.id) + 1) % playlist.length);
    const handlePrev = () => changeTrack((playlist.findIndex(t => t.id === currentTrack.id) - 1 + playlist.length) % playlist.length);
    const handleStopClick = () => stop();

    return (
        <div className="player-desktop-container">
            
            {/* COLUMNA 1 */}
            <div className="left-column-group">
                <div className="walkman-wrapper">
                    <img src={tapeReel} alt="L" className={`tape-reel-left ${isPlaying ? 'animate-spin-reel' : ''}`} />
                    <img src={tapeReel} alt="R" className={`tape-reel-right ${isPlaying ? 'animate-spin-reel' : ''}`} />
                    <img src={cassetteMask} className="cassette-mask-layer" alt="Mask" />
                    <img src={walkmanBody} className="walkman-body-layer" alt="Body" />
                </div>

                <div className="rack-wrapper">
                    <img src={controlRackBase} alt="Rack" className="rack-base-img" />
                    <div className="rack-overlay">
                        {/* PANTALLA */}
                        <div className="rack-top-panel">
                            <div style={{ width: '15%', fontSize: '10px', color: '#666', fontWeight: 'bold' }}>
                               {isPlaying ? <span className="pulse-rec" style={{ color: 'red' }}>● REC</span> : "STANDBY"}
                            </div>
                            <div className="segment-bar-container">
                                {Array.from({ length: totalSegments }).map((_, i) => (
                                    <div key={i} className={getSegmentClass(i, i < activeSegments)} onClick={() => handleSegmentClick(i)}></div>
                                ))}
                            </div>
                            <div className="time-display">{formatTime(currentTime)}</div>
                        </div>

                        {/* BOTONES */}
                        <div className="rack-buttons-row">
                            <div className="rack-btn-slot"><button className="rack-btn-image" onClick={handlePrev} onMouseDown={() => setIsPrevPressed(true)} onMouseUp={() => setIsPrevPressed(false)} onMouseLeave={() => setIsPrevPressed(false)}><img src={isPrevPressed ? btnPrevActive : btnPrevIdle} alt="Prev" /></button></div>
                            <div className="rack-btn-slot"><button className="rack-btn-image" onClick={togglePlay} onMouseDown={() => setIsPlayPressed(true)} onMouseUp={() => setIsPlayPressed(false)} onMouseLeave={() => setIsPlayPressed(false)}><img src={isPlaying || isPlayPressed ? btnPlayActive : btnPlayIdle} alt="Play" /></button></div>
                            <div className="rack-btn-slot"><button className="rack-btn-image" onClick={handleStopClick} onMouseDown={() => setIsStopPressed(true)} onMouseUp={() => setIsStopPressed(false)} onMouseLeave={() => setIsStopPressed(false)}><img src={isStopPressed ? btnStopActive : btnStopIdle} alt="Stop" /></button></div>
                            <div className="rack-btn-slot"><button className="rack-btn-image" onClick={handleNext} onMouseDown={() => setIsNextPressed(true)} onMouseUp={() => setIsNextPressed(false)} onMouseLeave={() => setIsNextPressed(false)}><img src={isNextPressed ? btnNextActive : btnNextIdle} alt="Next" /></button></div>
                        </div>

                        {/* VOLUMEN FADER */}
                        <div className="rack-volume-container" onClick={handleVolumeClick} title={`Vol: ${Math.round(volume * 100)}%`}>
                            <div className="volume-track"><div className="volume-knob" style={{ left: `${volume * 100}%` }}></div></div>
                        </div>

                        {/* === ANALIZADOR DE ESPECTRO REALISTA === */}
                        <div className={`spectrum-container ${isPlaying ? 'playing' : ''}`}>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                            <div className="spectrum-bar"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* COLUMNA 2 */}
            <div className="right-column-group">
                <div className="vhs-box-art">
                    <img key={currentTrack.id} src={currentTrack.art} alt="Art" className={`box-art-img ${isChangingTrack ? 'pixel-transition' : ''}`} />
                    <img src={vinylOverlay} alt="Overlay" className="box-art-overlay" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.6))', pointerEvents: 'none', zIndex: 5 }}></div>
                </div>

                <div className="vhs-playlist-container">
                    <div className="vhs-header"><span className="title">PLAYLIST // MEMORY</span><span style={{ fontSize: '10px', color: '#666' }}>SP 2:00</span></div>
                    <ul className="vhs-list">
                        {playlist.map((track, index) => (
                            <li key={track.id} className={`vhs-track-item ${currentTrack.id === track.id ? 'active' : ''}`} onClick={() => changeTrack(index)}>
                                <div style={{ display: 'flex', gap: '10px' }}><span style={{ opacity: 0.5 }}>{String(index + 1).padStart(2, '0')}.</span><span>{track.title}</span></div>
                                {currentTrack.id === track.id && <span className="track-icon">▶</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* COLUMNA 3 */}
            <div className="social-column-group">
                <img src={sidePanelBase} alt="Panel" className="side-panel-img" />
                <div className="social-overlay">
                    <div className="social-buttons-container">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn-link" onMouseDown={() => setIsIgPressed(true)} onMouseUp={() => setIsIgPressed(false)} onMouseLeave={() => setIsIgPressed(false)}><img src={isIgPressed ? btnIgActive : btnIgIdle} alt="IG" /></a>
                        <a href="https://spotify.com" target="_blank" rel="noreferrer" className="social-btn-link" onMouseDown={() => setIsSpotyPressed(true)} onMouseUp={() => setIsSpotyPressed(false)} onMouseLeave={() => setIsSpotyPressed(false)}><img src={isSpotyPressed ? btnSpotyActive : btnSpotyIdle} alt="Spoty" /></a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn-link" onMouseDown={() => setIsYtPressed(true)} onMouseUp={() => setIsYtPressed(false)} onMouseLeave={() => setIsYtPressed(false)}><img src={isYtPressed ? btnYtActive : btnYtIdle} alt="YT" /></a>
                    </div>
                    <div className="knob-section">
                        <div className="knob-container" ref={knobRef} onMouseDown={handleKnobMouseDown} title={`Vol: ${Math.round(volume * 100)}%`}>
                            <div className="knob-leds-ring">{renderLeds()}</div>
                            <img src={volumeKnobImg} alt="Knob" className="knob-img" style={{ transform: `rotate(${volumeToAngle(volume)}deg)` }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};