import React from 'react';

const TourSectionDesktop = () => {

  // Datos de los eventos para generar las 4 cards
  const events = [
    {
      id: 1,
      image: '/eventos1.png',
      day: '12',
      month: 'OCT',
      city: 'BOGOTÁ',
      artist: 'MARTINIKA',
      venue: 'TEATRO LIBÉLULA',
      desc: 'Lanzamiento oficial del nuevo álbum.',
      price: '$ 50.000 COP',
      // Patrón: Morado / Rosa / Naranja
      colors: ['bg-[#9d00ff]', 'bg-[#ff0055]', 'bg-[#ffaa00]'] 
    },
    {
      id: 2,
      image: '/eventos2.png',
      day: '05',
      month: 'NOV',
      city: 'MEDELLÍN',
      artist: 'FESTIVAL',
      venue: 'PABLO TOBÓN',
      desc: 'Noche de jazz y fusión experimental.',
      price: '$ 75.000 COP',
      // Patrón: Azul / Cian / Verde
      colors: ['bg-[#0033cc]', 'bg-[#00ccff]', 'bg-[#00ff99]']
    },
    {
      id: 3,
      image: '/eventos3.png',
      day: '15',
      month: 'DIC',
      city: 'CALI',
      artist: 'ACÚSTICO',
      venue: 'TEATRO MUNICIPAL',
      desc: 'Sesión íntima para coleccionistas.',
      price: '$ 40.000 COP',
      // Patrón: Rojo / Naranja / Amarillo
      colors: ['bg-[#cc0000]', 'bg-[#ff6600]', 'bg-[#ffcc00]']
    },
    {
      id: 4,
      image: '/eventos4.png',
      day: '20',
      month: 'ENE',
      city: 'BOGOTÁ',
      artist: 'CLOSING',
      venue: 'ACE OF SPADES',
      desc: 'Gran cierre de temporada.',
      price: '$ 60.000 COP',
      // Patrón: Rosa / Morado / Azul Oscuro
      colors: ['bg-[#ff00cc]', 'bg-[#6600cc]', 'bg-[#000066]']
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-[#050505] overflow-hidden pt-32 pb-20">
      
      {/* 1. FONDO */}
      <img 
        src="/bg-texture.png" 
        alt="Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none" 
      />
      
      {/* 2. TÍTULO Y GLITCH */}
      <div className="relative z-50 flex flex-col items-center w-full max-w-7xl mx-auto pointer-events-none mb-12">
        
        {/* TÍTULO SERIF */}
        <div className="flex flex-row flex-nowrap items-baseline justify-center gap-6 mb-2 w-full">
          <span 
            className="font-bold text-[#e0dacc] tracking-tighter drop-shadow-2xl whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', lineHeight: 1 }} 
          >
            TOUR
          </span>
          <span 
            className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ff5500] via-[#ff0055] to-[#9900cc] drop-shadow-2xl whitespace-nowrap"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', lineHeight: 1 }}
          >
            FECHAS
          </span>
        </div>

        {/* LÍNEAS UNDERLINE */}
        <div className="flex flex-col items-center gap-1 w-full opacity-90">
             <div className="w-[400px] h-[3px] bg-[#ffaa00] shadow-[0_0_15px_#ffaa00] line-glitch-1"></div>
             <div className="w-[550px] h-[3px] bg-[#ff0055] shadow-[0_0_15px_#ff0055] line-glitch-2"></div>
             <div className="w-[350px] h-[3px] bg-[#9d00ff] shadow-[0_0_15px_#9d00ff] line-glitch-3"></div>
             <div className="w-[600px] h-[1px] bg-[#00ffff] opacity-80 shadow-[0_0_5px_#00ffff]"></div>
        </div>

      </div>

      {/* 3. GRID DE CARDS (Horizontal) */}
      <div className="relative z-40 w-full max-w-[1400px] flex flex-wrap justify-center gap-8 px-4">
        
        {events.map((evt) => (
          <div key={evt.id} className="w-[280px] bg-[#dcd7cd] p-1.5 rounded-[2px] shadow-[0_0_20px_rgba(0,0,0,0.8)] transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all duration-300 cursor-pointer group">
              
              {/* --- HEADER (REC + PRECIO) --- */}
              <div className="bg-[#0a0a0a] h-8 flex items-center justify-between px-2 border-b border-[#333]">
                  <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-full animate-pulse shadow-[0_0_8px_#ff0000]"></div>
                      <span className="text-[#e0e0e0] font-sans text-xs font-bold tracking-widest">REC</span>
                  </div>
                  {/* PRECIO EN COP */}
                  <span className="text-[#ffcc00] font-mono text-xs font-bold tracking-wider">{evt.price}</span>
              </div>

              {/* --- IMAGEN PRINCIPAL --- */}
              <div className="relative w-full h-[160px] bg-[#222] overflow-hidden border-b-2 border-[#ffaa00]">
                  <img 
                      src={evt.image} 
                      alt={evt.artist} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* STICKER FECHA */}
                  <div className="absolute top-2 left-2 bg-black border border-white/30 px-2 py-1 shadow-lg z-10">
                      <div className="text-center leading-none">
                          <span className="block text-[#fff] text-[9px] font-bold uppercase mb-0.5">{evt.month}</span>
                          <span className="block text-white text-lg font-bold">{evt.day}</span>
                      </div>
                  </div>
              </div>

              {/* --- CUERPO --- */}
              <div className="bg-[#0e0e0e] p-3 pt-4 flex flex-col gap-1 relative min-h-[130px]">
                  
                  {/* Ciudad */}
                  <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffcc00] shadow-[0_0_5px_#ffcc00]"></div>
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest">{evt.city}</span>
                  </div>

                  {/* Artista */}
                  <h3 className="text-xl font-sans font-bold leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff6600]">
                      {evt.artist}
                  </h3>
                  
                  {/* Venue */}
                  <p className="text-white text-[10px] font-bold uppercase opacity-90 border-b border-[#333] pb-2 mb-1 w-full">
                      {evt.venue}
                  </p>

                  {/* Descripción */}
                  <p className="text-[#888] text-[9px] leading-tight font-mono">
                      {evt.desc}
                  </p>

                  {/* Botón */}
                  <div className="mt-auto pt-3">
                      <button className="w-full bg-gradient-to-r from-[#cc0000] via-[#ff4400] to-[#cc0000] text-white text-[10px] font-bold uppercase py-1.5 border border-white/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                          COMPRAR TICKET <span>▶</span>
                      </button>
                  </div>
              </div>

              {/* --- FOOTER VHS (COLORES VARIABLES) --- */}
              <div className="bg-[#dcd7cd] h-6 flex items-center gap-2 px-1 border-t border-[#999] mt-0.5">
                  <div className="bg-white border border-black px-1 text-[8px] font-bold">120•HQ</div>
                  {/* Barra de Colores Dinámica */}
                  <div className="flex h-1.5 flex-1 mx-1 border border-black/20">
                      <div className={`flex-1 ${evt.colors[0]}`}></div>
                      <div className={`flex-1 ${evt.colors[1]}`}></div>
                      <div className={`flex-1 ${evt.colors[2]}`}></div>
                  </div>
                  <span className="text-black text-[8px] font-bold tracking-tight">HI-FI</span>
              </div>

          </div>
        ))}

      </div>
      
    </section>
  );
};

export default TourSectionDesktop;