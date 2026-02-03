import React from 'react';

const TourSectionMobile = () => {

  const events = [
    {
      id: 1,
      image: '/eventos1.png',
      day: '12',
      month: 'OCT',
      city: 'BOGOTÁ',
      artist: 'MARTINIKA',
      venue: 'TEATRO LIBÉLULA',
      desc: 'Lanzamiento álbum.',
      price: '$50K',
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
      desc: 'Noche de jazz.',
      price: '$75K',
      colors: ['bg-[#0033cc]', 'bg-[#00ccff]', 'bg-[#00ff99]']
    },
    {
      id: 3,
      image: '/eventos3.png',
      day: '15',
      month: 'DIC',
      city: 'CALI',
      artist: 'ACÚSTICO',
      venue: 'MUNICIPAL',
      desc: 'Sesión íntima.',
      price: '$40K',
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
      desc: 'Cierre temporada.',
      price: '$60K',
      colors: ['bg-[#ff00cc]', 'bg-[#6600cc]', 'bg-[#000066]']
    }
  ];

  return (
    // CAMBIO CRÍTICO: 'z-0' en la sección y 'pb-40' para dar espacio al player abajo
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-start bg-[#050505] overflow-hidden pt-24 pb-40 z-0">
      
      {/* 1. RESPALDO RETRO (Z-0) */}
      <div className="absolute inset-0 z-0 retro-stripes opacity-20"></div>

      {/* 2. IMAGEN FONDO (Z-0) - Forzada para verse */}
      <img 
        src="/bg-texture.png" 
        alt="Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none mix-blend-screen"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      
      {/* 3. RUIDO EXTRA (Z-0) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none noise-overlay mix-blend-overlay"></div>

      {/* --- CONTENIDO HEADER (Z-10) --- */}
      {/* CAMBIO CRÍTICO: Bajado de z-50 a z-10 para no tapar el player */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 mb-8">
        
        <h2 className="flex flex-col items-center leading-none mb-4">
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

        {/* Líneas Decorativas */}
        <div className="flex flex-col items-center gap-1 w-full opacity-90">
             <div className="w-[180px] h-[2px] bg-[#ffaa00] shadow-[0_0_10px_#ffaa00] line-glitch-1"></div>
             <div className="w-[240px] h-[2px] bg-[#ff0055] shadow-[0_0_10px_#ff0055] line-glitch-2"></div>
             <div className="w-[150px] h-[2px] bg-[#9d00ff] shadow-[0_0_10px_#9d00ff] line-glitch-3"></div>
        </div>

      </div>

      {/* --- GRID DE CARDS (Z-10) --- */}
      {/* CAMBIO CRÍTICO: Bajado de z-40 a z-10 */}
      <div className="relative z-10 w-full px-3 grid grid-cols-2 gap-3 max-w-[500px]">
        
        {events.map((evt) => (
          <div key={evt.id} className="w-full bg-[#dcd7cd] p-1 rounded-[2px] shadow-[0_0_10px_rgba(0,0,0,0.8)] active:scale-95 transition-transform duration-200">
              
              {/* Header Card */}
              <div className="bg-[#0a0a0a] h-6 flex items-center justify-between px-1.5 border-b border-[#333]">
                  <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full animate-pulse"></div>
                      <span className="text-[#e0e0e0] font-sans text-[8px] font-bold tracking-widest">REC</span>
                  </div>
                  <span className="text-[#ffcc00] font-mono text-[8px] font-bold">{evt.price}</span>
              </div>

              {/* Imagen */}
              <div className="relative w-full h-[90px] bg-[#222] overflow-hidden border-b border-[#ffaa00]">
                  <img 
                      src={evt.image} 
                      alt={evt.artist} 
                      className="w-full h-full object-cover grayscale opacity-90"
                  />
                  <div className="absolute top-1 left-1 bg-black border border-white/30 px-1 py-0.5 shadow-md z-10">
                      <div className="text-center leading-none">
                          <span className="block text-[#fff] text-[7px] font-bold uppercase">{evt.month}</span>
                          <span className="block text-white text-sm font-bold">{evt.day}</span>
                      </div>
                  </div>
              </div>

              {/* Cuerpo */}
              <div className="bg-[#0e0e0e] p-2 flex flex-col gap-0.5 min-h-[90px]">
                  <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-[#ffcc00]"></div>
                      <span className="text-white text-[7px] font-bold uppercase tracking-widest">{evt.city}</span>
                  </div>
                  <h3 className="text-sm font-sans font-bold leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff6600] my-0.5">
                      {evt.artist}
                  </h3>
                  <p className="text-white text-[8px] font-bold uppercase opacity-90 border-b border-[#333] pb-1 mb-0.5 w-full truncate">
                      {evt.venue}
                  </p>
                  <p className="text-[#888] text-[7px] leading-tight font-mono line-clamp-2">
                      {evt.desc}
                  </p>
                  <div className="mt-auto pt-2">
                      <button className="w-full bg-gradient-to-r from-[#cc0000] via-[#ff4400] to-[#cc0000] text-white text-[8px] font-bold uppercase py-1 border border-white/20 flex items-center justify-center gap-1">
                          TICKET ▶
                      </button>
                  </div>
              </div>

              {/* Footer VHS */}
              <div className="bg-[#dcd7cd] h-4 flex items-center gap-1 px-1 border-t border-[#999] mt-0.5">
                  <div className="bg-white border border-black px-0.5 text-[6px] font-bold">HQ</div>
                  <div className="flex h-1 flex-1 mx-0.5 border border-black/20">
                      <div className={`flex-1 ${evt.colors[0]}`}></div>
                      <div className={`flex-1 ${evt.colors[1]}`}></div>
                      <div className={`flex-1 ${evt.colors[2]}`}></div>
                  </div>
              </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TourSectionMobile;