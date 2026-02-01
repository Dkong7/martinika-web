import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // <--- AGREGADO UN "../" MÁS

const HeroDesktop = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#050505]">
      
      {/* TEXTURAS */}
      <div className="retro-stripes pointer-events-none absolute inset-0 z-0"></div>
      <div className="noise-overlay absolute inset-0 z-50 opacity-20 pointer-events-none"></div>
      <div className="cardboard-texture-overlay fixed inset-0 z-[60] pointer-events-none"></div>

      {/* BARRA DE COLORES */}
      <div className="absolute z-30 flex shadow-lg" style={{ top: '130px', right: '0', width: '450px', height: '24px' }}>
          <div className="flex-1 bg-[#ffcc00]"></div>
          <div className="flex-1 bg-[#ff6600]"></div>
          <div className="flex-1 bg-[#ff0033]"></div>
          <div className="flex-1 bg-[#9900cc]"></div>
          <div className="flex-1 bg-[#0033cc]"></div>
      </div>

      <div className="relative w-full h-full max-w-[1920px] mx-auto z-20">
        
        {/* A. IMAGEN (Derecha) */}
        <div 
            className="absolute z-20 pointer-events-none"
            style={{ 
                bottom: '0', 
                right: '12%', 
                width: '50%', 
                height: '88%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
            }}
        >
             <img 
                 src="/martinika-hero-image.png" 
                 alt="Martinika Artist" 
                 className="w-full h-full object-contain object-bottom texture-vhs-photo drop-shadow-[15px_0px_25px_rgba(0,0,0,0.9)]"
             />
        </div>

        {/* B. COLUMNA IZQUIERDA */}
        <div 
            className="absolute z-30 flex flex-col items-start"
            style={{ 
                top: '32%', 
                left: '10%', 
                width: 'auto'
            }}
        >
            <h3 className="font-mono tracking-[0.6em] text-base pl-1 font-bold mb-2" style={{ color: '#111' }}>
                {t('welcome')}
            </h3>
            
            {/* LOGO - TAMAÑO REDUCIDO */}
            <div className="relative flex items-center justify-center" style={{ width: '450px', height: '230px', marginLeft: '-30px' }}>
                <img src="/extras.svg" alt="" className="absolute inset-0 w-full h-full object-contain extras-black pointer-events-none" />
                <div className="relative z-10 w-full h-full flex items-center justify-center logo-triad-glitch">
                    <img src="/typo.svg" alt="Martinika Logo" className="w-full h-full object-contain" style={{ filter: 'brightness(0)', paddingBottom: '15px' }} />
                </div>
            </div>

            {/* CAJA TEXTO */}
            <div className="bg-[#ffcc00] text-black px-8 py-2 ml-6 inline-block transform -skew-x-6 shadow-[5px_5px_0px_rgba(0,0,0,0.3)]" style={{ marginTop: '-25px' }}>
                <h2 className="text-2xl font-black tracking-[0.2em] uppercase transform skew-x-6">
                    {t('album')}
                </h2>
            </div>
        </div>

        {/* C. INFO TÉCNICA (DERECHA) */}
        <div 
            className="absolute z-30 flex flex-col items-end text-right"
            style={{ 
                top: '38%', 
                right: '8%' 
            }}
        >
            <h2 className="text-[#ffcc00] text-[6rem] font-black tracking-tighter leading-none drop-shadow-lg mb-2">
                {t('hd')}
            </h2>
            
            <div className="bg-[#ffcc00] text-black px-6 py-1 mb-8 transform skew-x-[-10deg] shadow-lg inline-block">
                <span className="block font-black tracking-[0.15em] text-xl transform skew-x-[10deg]">
                    {t('ultra_color')}
                </span>
            </div>
            
            <div className="w-[300px] border-t-2 border-[#ffcc00]/60 py-4 font-mono text-lg font-bold bg-black/40 backdrop-blur-sm rounded-sm">
                <div className="flex justify-between items-center border-b border-[#ffcc00]/30 py-2 px-4 text-[#ffcc00]">
                    <span className="bg-[#ffcc00]/20 border border-[#ffcc00]/50 px-3 py-1 text-sm text-[#ffcc00]">SP</span><span className="tracking-widest">120 MIN.</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#ffcc00]/30 py-2 px-4 text-[#ffcc00]">
                    <span className="bg-[#ffcc00]/20 border border-[#ffcc00]/50 px-3 py-1 text-sm text-[#ffcc00]">LP</span><span className="tracking-widest">240 MIN.</span>
                </div>
                <div className="flex justify-between items-center py-2 px-4 text-[#ffcc00]">
                    <span className="bg-[#ffcc00]/20 border border-[#ffcc00]/50 px-3 py-1 text-sm text-[#ffcc00]">EP</span><span className="tracking-widest">360 MIN.</span>
                </div>
                <p className="text-center text-[10px] tracking-[0.4em] text-[#ffcc00]/70 mt-4 uppercase">
                    {t('quality')}
                </p>
                <p className="text-center text-[10px] tracking-[0.2em] text-[#ffcc00] mt-2 font-black border border-[#ffcc00] inline-block px-3 py-1">
                    {t('stereo')}
                </p>
            </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div 
        className="absolute left-0 w-full bg-[#08080a] border-t-2 border-white/20 z-50 flex justify-center" 
        style={{ bottom: 0, height: '70px' }}
      >
         <div 
            className="w-full max-w-[1920px] flex items-center justify-between h-full"
            style={{ paddingLeft: '60px', paddingRight: '60px' }}
         >
             
             {/* LADO IZQUIERDO */}
             <div className="flex items-center gap-8">
                 <span className="font-black text-4xl tracking-widest drop-shadow-md" style={{ color: '#ffffff' }}>
                    VIDEO
                 </span>
                 <div className="flex gap-4 text-sm font-mono font-bold">
                     <span style={{ color: '#ffffff', border: '1px solid #ffffff', padding: '2px 8px' }}>VHS</span>
                     <span style={{ color: '#ffffff', border: '1px solid #ffffff', padding: '2px 8px' }}>HQ</span>
                     <span style={{ color: '#ffffff', border: '1px solid #ffffff', padding: '2px 8px' }}>HI-FI</span>
                 </div>
             </div>

             {/* LADO DERECHO */}
             <div className="flex items-center gap-4 font-mono text-2xl tracking-[0.2em]">
                 <span className="animate-pulse" style={{ color: '#ffcc00' }}>▶</span> 
                 <span style={{ color: '#ffffff' }}>00:02:46</span>
             </div>
         </div>
      </div>

    </section>
  );
};

export default HeroDesktop;