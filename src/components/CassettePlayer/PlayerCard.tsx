import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';
import { playerTranslations } from './player-translations';
import React from 'react';

interface PlayerCardProps {
  albumArt: string;
  albumTitle: string;
  artistName: string; // Asumiendo que se pasa el nombre del artista si es necesario
}

const PlayerCard: React.FC<PlayerCardProps> = ({ albumArt, albumTitle }) => {
  const { lang } = useLanguage();
  const t = playerTranslations[lang as keyof typeof playerTranslations];

  // Links reales a las redes sociales de Martinika
  const socialLinks = {
    instagram: "https://www.instagram.com/martinika_oficial/",
    spotify: "https://open.spotify.com/artist/tu_id_de_spotify", // Reemplazar con el ID real
    youtube: "https://www.youtube.com/channel/tu_id_de_youtube",  // Reemplazar con el ID real
  };

  return (
    <div className="relative bg-[#1a1a1a] p-4 rounded-lg shadow-xl border border-[#333] flex flex-col items-center">
      {/* Top Bar - REC STEREO */}
      <div className="absolute top-2 left-2 flex items-center gap-2 text-red-500 font-mono text-[10px] tracking-widest bg-[#000] px-1 py-0.5 border border-red-700">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <span>{t.recStereo}</span>
      </div>
      <div className="absolute top-2 right-2 text-vhs-neon-green font-mono text-[10px] tracking-widest vhs-glow">
        @90's
      </div>

      {/* Album Art Container */}
      <div className="relative w-full aspect-square bg-[#000] flex items-center justify-center p-2 border border-[#444] shadow-inner mb-4 mt-6">
        <img src={albumArt} alt={albumTitle} className="w-full h-full object-cover border-2 border-[#666]" />
        {/* Overlay de estática sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 scanlines-overlay"></div>
      </div>

      {/* Album Title */}
      <h3 className="font-bold text-xl md:text-2xl text-white uppercase mb-2 text-center vhs-text-shadow">
        {t.backIn90s} <br />
        <span className="text-vhs-yellow text-sm font-mono tracking-wider">{albumTitle}</span>
      </h3>

      {/* VHS Labels */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 mt-2">
        <span className="bg-[#000] px-1 py-0.5 border border-[#555]">{t.ultraColor}</span>
        <span className="bg-[#000] px-1 py-0.5 border border-[#555] text-vhs-neon-green">{t.hiFiStereo}</span>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 text-gray-400">
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
          <FontAwesomeIcon icon={faSpotify} size="lg" />
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>

      {/* Share Button */}
      <button className="absolute bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 hover:bg-gray-700 transition-colors">
        <FontAwesomeIcon icon={faShareNodes} />
        <span>{t.share}</span>
      </button>
    </div>
  );
};

export default PlayerCard;