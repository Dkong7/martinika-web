import React, { useState } from 'react';
import { usePlayerLogic } from './usePlayerLogic';
import './player-styles.css';

// --- ASSETS GENERALES ---
import bgWood from '../../assets/bg-wood.png'; // FONDO DE MADERA
import cassetteMask from '../../assets/cassette-mask.png';
import tapeReel from '../../assets/tape-reel.png';
import controlRackBase from '../../assets/control-rack-base.png';
import walkmanBody from '../../assets/walkman-body.png';
import vinylOverlay from '../../assets/vinyl-texture-overlay.png';

// --- ASSETS BOTONES (PNG REALES) ---
import btnPlayIdle from '../../assets/btn-play-idle.png';
import btnPlayActive from '../../assets/btn-play-active.png';
import btnStopIdle from '../../assets/btn-stop-idle.png';
import btnStopActive from '../../assets/btn-stop-active.png';
import btnPrevIdle from '../../assets/btn-prev-idle.png';
import btnPrevActive from '../../assets/btn-prev-active.png';
import btnNextIdle from '../../assets/btn-next-idle.png';
import btnNextActive from '../../assets/btn-next-active.png';

const PlayerMobile: React.FC = () => {
    // 1. Lógica
    const { 
        isPlaying, togglePlay, currentTime, duration, seek, volume, changeVolume,
        currentTrack, isChangingTrack, playlist, changeTrack, stop
    } = usePlayerLogic();

    // 2. Estados Visuales Botones
    const [isPlayPressed, setIsPlayPressed] = useState(false);
    const [isStopPressed, setIsStopPressed] = useState(false);
    const [isPrevPressed, setIsPrevPressed] = useState(false);
    const [isNextPressed, setIsNextPressed] = useState(false);

    // 3. Barra de Tiempo
    const totalSegments = 20; 
    const activeSegments = duration ? Math.floor((currentTime / duration) * totalSegments) : 0;

    const handleSegmentClick = (index: number) => {
        const newTime = (index / totalSegments) * duration;
        seek(newTime);
    };

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

    // 4. Control Volumen
    const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const usefulWidth = rect.width * 0.9;
        const newVol = Math.max(0, Math.min(1, x / usefulWidth));
        changeVolume(newVol);
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // 5. Navegación
    const handleNext = () => changeTrack((playlist.findIndex(t => t.id === currentTrack.id) + 1) % playlist.length);
    const handlePrev = () => changeTrack((playlist.findIndex(t => t.id === currentTrack.id) - 1 + playlist.length) % playlist.length);
    const handleStopClick = () => stop();

    return (
        <div 
            className="w-full h-full flex flex-col items-center justify-start pt-6 gap-6 overflow-y-auto overflow-x-hidden pb-32"
            style={{ 
                backgroundImage: `url(${bgWood})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            
            {/* 1. ARTE (VHS BOX) */}
            <div className="relative w-[85%] aspect-square shrink-0 vhs-box-art shadow-2xl border border-[#333]">
                <img 
                    key={currentTrack.id} 
                    src={currentTrack.art} 
                    alt="Album Art" 
                    className={`absolute inset-0 w-full h-full object-cover z-[1] ${isChangingTrack ? 'pixel-transition' : ''}`} 
                />
                {/* Overlay Vinilo */}
                <img src={vinylOverlay} alt="Texture" className="absolute inset-0 w-full h-full object-cover z-[2] opacity-50 mix-blend-overlay pointer-events-none" />
                {/* Sombra interna */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-[3] pointer-events-none"></div>
            </div>

            {/* 2. WALKMAN MOBILE */}
            <div className="relative w-[90%] max-w-[340px] aspect-[1.6] shrink-0">
                <img src={tapeReel} alt="L" className={`absolute z-[20] w-[14%] top-[49%] left-[37.5%] -translate-y-1/2 -translate-x-1/2 pointer-events-none ${isPlaying ? 'animate-spin-reel' : ''}`} />
                <img src={tapeReel} alt="R" className={`absolute z-[20] w-[14%] top-[49%] right-[24%] -translate-y-1/2 -translate-x-1/2 pointer-events-none ${isPlaying ? 'animate-spin-reel' : ''}`} />
                <img src={cassetteMask} alt="Mask" className="absolute inset-0 w-full h-full object-contain z-[25]" />
                <img src={walkmanBody} alt="Body" className="absolute inset-0 w-full h-full object-contain z-[30] drop-shadow-2xl" />
            </div>

            {/* 3. RACK DE CONTROLES (BOTONES REALES) */}
            <div className="relative w-[95%] max-w-[360px] shrink-0 z-40">
                <img src={controlRackBase} alt="Rack" className="w-full h-auto drop-shadow-xl" />
                
                <div className="rack-overlay">
                    
                    {/* Pantalla */}
                    <div className="absolute top-[15.5%] left-[6.5%] w-[87%] h-[16%] flex items-center justify-between px-2 box-border">
                        <div style={{ width: '20%', fontSize: '9px', color: '#666', fontWeight: 'bold' }}>
                           {isPlaying ? <span className="pulse-rec" style={{ color: 'red' }}>● REC</span> : "READY"}
                        </div>
                        <div className="flex gap-[1px] h-[55%] w-[68%] items-center bg-black/50 p-[2px] rounded-[1px]">
                            {Array.from({ length: totalSegments }).map((_, i) => (
                                <div key={i} className={getSegmentClass(i, i < activeSegments)} style={{ flex: 1, height: '100%', borderRadius: '1px' }} onClick={() => handleSegmentClick(i)}></div>
                            ))}
                        </div>
                        <div className="text-right w-[15%] font-mono text-[10px] font-bold text-[#00ff55] drop-shadow-[0_0_3px_#00ff55]">{formatTime(currentTime)}</div>
                    </div>

                    {/* Botones Reales (PNGs) */}
                    <div className="absolute top-[36%] left-[3%] w-[92%] h-[21%] flex justify-between items-center">
                        <div className="w-[23%] h-full flex justify-center items-center">
                            <button className="w-full h-full flex justify-center items-center p-0 bg-transparent border-none active:scale-95 transition-transform"
                                onMouseDown={() => setIsPrevPressed(true)} onMouseUp={() => setIsPrevPressed(false)} onMouseLeave={() => setIsPrevPressed(false)} onClick={handlePrev}>
                                <img src={isPrevPressed ? btnPrevActive : btnPrevIdle} alt="Prev" className="w-full h-full object-contain drop-shadow-md" />
                            </button>
                        </div>
                        <div className="w-[23%] h-full flex justify-center items-center">
                            <button className="w-full h-full flex justify-center items-center p-0 bg-transparent border-none active:scale-95 transition-transform"
                                onMouseDown={() => setIsPlayPressed(true)} onMouseUp={() => setIsPlayPressed(false)} onMouseLeave={() => setIsPlayPressed(false)} onClick={togglePlay}>
                                <img src={isPlaying || isPlayPressed ? btnPlayActive : btnPlayIdle} alt="Play" className="w-full h-full object-contain drop-shadow-md" />
                            </button>
                        </div>
                        <div className="w-[23%] h-full flex justify-center items-center">
                            <button className="w-full h-full flex justify-center items-center p-0 bg-transparent border-none active:scale-95 transition-transform"
                                onMouseDown={() => setIsStopPressed(true)} onMouseUp={() => setIsStopPressed(false)} onMouseLeave={() => setIsStopPressed(false)} onClick={handleStopClick}>
                                <img src={isStopPressed ? btnStopActive : btnStopIdle} alt="Stop" className="w-full h-full object-contain drop-shadow-md" />
                            </button>
                        </div>
                        <div className="w-[23%] h-full flex justify-center items-center">
                            <button className="w-full h-full flex justify-center items-center p-0 bg-transparent border-none active:scale-95 transition-transform"
                                onMouseDown={() => setIsNextPressed(true)} onMouseUp={() => setIsNextPressed(false)} onMouseLeave={() => setIsNextPressed(false)} onClick={handleNext}>
                                <img src={isNextPressed ? btnNextActive : btnNextIdle} alt="Next" className="w-full h-full object-contain drop-shadow-md" />
                            </button>
                        </div>
                    </div>

                    {/* Fader Volumen */}
                    <div className="absolute top-[79%] left-[10%] w-[38%] h-[12%] flex items-center cursor-ew-resize pl-[2%]" onClick={handleVolumeClick}>
                        <div className="relative w-[90%] h-[5px] bg-[#222] rounded-[3px] shadow-[inset_0_1px_2px_#000]">
                            <div className="absolute top-1/2 w-[24px] h-[12px] bg-[#555] -translate-y-1/2 border border-black shadow-md" style={{ left: `${volume * 100}%`, transform: 'translate(-50%, -50%)' }}>
                                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-[#00ff55] shadow-[0_0_5px_#00ff55]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. PLAYLIST VHS */}
            <div className="w-[90%] max-w-[360px] vhs-playlist-container mb-10 shrink-0">
                <div className="vhs-header">
                    <span className="title">PLAYLIST</span>
                    <span style={{ fontSize: '10px', color: '#666' }}>SP 2:00</span>
                </div>
                <ul className="vhs-list" style={{ maxHeight: '250px' }}>
                    {playlist.map((track, index) => (
                        <li key={track.id} 
                            className={`vhs-track-item ${currentTrack.id === track.id ? 'active' : ''}`}
                            onClick={() => changeTrack(index)}>
                            <div className="flex gap-2">
                                <span className="opacity-50">{String(index + 1).padStart(2, '0')}.</span>
                                <span>{track.title}</span>
                            </div>
                            {currentTrack.id === track.id && <span className="track-icon">▶</span>}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default PlayerMobile;