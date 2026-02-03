import React from 'react';
import { PlayerDesktop } from './PlayerDesktop';
import PlayerMobile from './PlayerMobile';
import bgWood from '../../assets/bg-wood.png'; 

const Player = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      
      {/* 1. FONDO DE MADERA */}
      <img 
        src={bgWood} 
        alt="Wood Texture" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Viñeta oscura */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>

      {/* 2. LÓGICA DE VISUALIZACIÓN FORZADA (CSS PURO) */}
      <style>{`
        .player-view-desktop { display: none; width: 100%; height: 100%; }
        .player-view-mobile { display: block; width: 100%; height: 100%; }
        
        @media (min-width: 1024px) {
          .player-view-desktop { display: block !important; }
          .player-view-mobile { display: none !important; }
        }
      `}</style>

      {/* 3. CONTENEDOR DESKTOP */}
      <div className="player-view-desktop relative z-10">
        <PlayerDesktop />
      </div>

      {/* 4. CONTENEDOR MOBILE */}
      <div className="player-view-mobile relative z-10">
        <PlayerMobile />
      </div>

    </section>
  );
};

export default Player;