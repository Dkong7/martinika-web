import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faForward, faBackward, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { usePlayerLogic } from './usePlayerLogic'; 
// ELIMINADO: import songFile ... (Ya no es necesario porque el hook maneja la música)
import controlRackBase from '../../assets/control-rack-base.png'; 

const PlayerAudioControls: React.FC = () => {
  // CORRECCIÓN: Llamamos al hook sin argumentos ()
  const { 
    isPlaying, 
    currentTime, 
    duration, 
    volume, 
    togglePlay, 
    seek, 
    changeVolume,
    stop // Opcional: El hook ahora exporta una función stop dedicada
  } = usePlayerLogic();

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    seek(newTime);
  };

  const toggleMute = () => changeVolume(volume > 0 ? 0 : 0.8);

  // Handler para Stop usando la lógica del hook o la manual
  const handleStop = () => {
      if (stop) {
          stop();
      } else {
          seek(0);
          if (isPlaying) togglePlay();
      }
  };

  return (
    // CONTENEDOR PRINCIPAL
    // border-red-500: Para ver si el contenedor tiene dimensiones
    <div className="relative w-full max-w-[650px] mx-auto select-none border-2 border-red-500/50">
      
      {/* 1. IMAGEN BASE (El Rack) */}
      <img 
        src={controlRackBase} 
        alt="Control Rack" 
        className="w-full h-auto block relative z-10" 
        // Si la imagen falla, forzamos altura para que se vean los controles
        style={{ minHeight: '150px', backgroundColor: '#333' }}
      />

      {/* 2. CAPA DE INTERFAZ (Overlay) */}
      <div className="absolute inset-0 z-50 flex flex-col justify-between p-4 text-white">
        
        {/* --- A. DISPLAY (Slot Superior) --- */}
        {/* bg-blue-500/20: Fondo azul debug para ubicar la zona */}
        <div className="absolute top-[18%] left-[8%] w-[84%] h-[15%] flex items-center justify-between px-4 bg-blue-500/20">
             <div className="font-mono text-xs text-green-400 flex gap-2">
                {isPlaying && <span className="text-red-500 animate-pulse">● REC</span>}
                <span>STEREO</span>
             </div>
             <span className="font-mono text-sm text-green-400">
                {formatTime(currentTime)} / {formatTime(duration)}
             </span>
        </div>

        {/* --- B. BOTONES (Fila Central) --- */}
        {/* bg-green-500/20: Fondo verde debug para ubicar la zona */}
        <div className="absolute top-[48%] left-[8%] w-[84%] h-[20%] flex items-center justify-center gap-6 bg-green-500/20">
            <button className="p-2 hover:bg-white/10 rounded" onClick={() => seek(0)}>
                <FontAwesomeIcon icon={faBackward} size="lg" />
            </button>

            <button 
                className={`p-2 text-4xl hover:scale-105 transition-transform ${isPlaying ? 'text-green-500' : 'text-white'}`} 
                onClick={togglePlay}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>

            <button className="p-2 hover:bg-white/10 rounded text-red-400" onClick={handleStop}>
                <FontAwesomeIcon icon={faStop} size="lg" />
            </button>

            <button className="p-2 hover:bg-white/10 rounded" onClick={() => seek(duration)}>
                <FontAwesomeIcon icon={faForward} size="lg" />
            </button>
        </div>

        {/* --- C. BARRA DE PROGRESO (Slot Inferior) --- */}
        {/* bg-yellow-500/20: Fondo amarillo debug para ubicar la zona */}
        <div 
            className="absolute top-[78%] left-[13%] w-[33%] h-[8%] cursor-pointer bg-yellow-500/20"
            onClick={handleSeek}
        >
            <div className="w-full h-full relative">
                 {/* Barra visual */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-green-500 shadow-[0_0_10px_lime]"
                    style={{ width: `${progressPercent}%` }}
                ></div>
            </div>
        </div>

        {/* --- D. VOLUMEN (Derecha Abajo) --- */}
        <div 
            className="absolute top-[75%] left-[64%] w-[10%] h-[10%] cursor-pointer bg-purple-500/20 flex items-center justify-center"
            onClick={toggleMute}
        >
             <FontAwesomeIcon icon={volume === 0 ? faVolumeMute : faVolumeUp} />
             <span className="text-xs ml-1">{Math.round(volume * 100)}</span>
        </div>

      </div>
    </div>
  );
};

export default PlayerAudioControls;