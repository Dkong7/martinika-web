import React from 'react';

interface GlitchLogoProps {
  className?: string;
}

const GlitchLogo = ({ className = "" }: GlitchLogoProps) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Mantenemos brightness(0) para convertir el SVG en una silueta negra sólida (tinta).
        Esto permite que la animación 'chromatic-burst' del padre genere las sombras 
        de colores (Amarillo/Rojo/Verde) alrededor de este núcleo negro.
      */}
      <img 
        src="/typo.svg" 
        alt="MARTINIKA" 
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(0)' }} 
      />
    </div>
  );
};

export default GlitchLogo;