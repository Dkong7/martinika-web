import React from 'react';

const TourSectionMobile = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden pt-20 pb-20">
      
      {/* Fondo */}
      <img 
        src="/bg-texture.png" 
        alt="Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
      />

      <div className="relative z-50 flex flex-col items-center w-full px-4">
        
        {/* Título Mobile - Estilos forzados */}
        <h2 className="flex flex-col items-center leading-none mb-6">
          <span 
            className="font-bold text-[#e0dacc] tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem' }}
          >
            TOUR
          </span>
          <span 
            className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ff5500] via-[#ff0055] to-[#9900cc]"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: '3.5rem' }}
          >
            FECHAS
          </span>
        </h2>

        {/* Líneas Mobile */}
        <div className="w-full max-w-[300px] flex flex-col gap-1.5">
          <div className="w-full h-2 bg-[#ffaa00] shadow-[0_0_10px_#ffaa00]"></div>
          <div className="w-full h-2 bg-[#ff0055] shadow-[0_0_10px_#ff0055]"></div>
          <div className="w-full h-2 bg-[#9d00ff] shadow-[0_0_10px_#9d00ff]"></div>
        </div>

      </div>

      {/* Franjas Mobile */}
      <div className="absolute bottom-[-50px] right-[-50px] z-10 pointer-events-none transform -rotate-45 origin-top-left opacity-60">
         <div className="flex flex-col">
            <div className="w-[400px] h-8 bg-[#ffaa00]"></div>
            <div className="w-[400px] h-8 bg-[#ff0055]"></div>
            <div className="w-[400px] h-8 bg-[#9d00ff]"></div>
         </div>
      </div>

    </section>
  );
};

export default TourSectionMobile;