import { useLanguage } from '../../context/LanguageContext'; // <--- AGREGADO UN "../" MÁS

const HeroMobile = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#050505] flex flex-col justify-between">
      
      {/* 1. TEXTURAS */}
      <div className="retro-stripes pointer-events-none absolute inset-0 z-0"></div>
      <div className="noise-overlay absolute inset-0 z-50 opacity-20 pointer-events-none"></div>
      <div className="cardboard-texture-overlay fixed inset-0 z-[60] pointer-events-none"></div>

      {/* 2. BARRA DE COLORES */}
      <div className="absolute top-[80px] right-0 w-[200px] h-4 z-30 flex shadow-lg">
          <div className="flex-1 bg-[#ffcc00]"></div><div className="flex-1 bg-[#ff6600]"></div>
          <div className="flex-1 bg-[#ff0033]"></div><div className="flex-1 bg-[#9900cc]"></div><div className="flex-1 bg-[#0033cc]"></div>
      </div>

      {/* 3. IMAGEN DE FONDO */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-[70vh] z-20 flex items-start justify-center pointer-events-none mt-[80px]">
          <img src="/martinika-hero-image.png" alt="Martinika" className="h-full w-auto object-contain object-top texture-vhs-photo" />
      </div>

      {/* 4. ELEMENTOS CENTRALES */}
      <div 
        className="absolute left-0 w-full flex flex-col items-center px-4 z-30" 
        style={{ top: '48%', color: 'white' }} 
      >
          <h3 
            className="font-mono tracking-[0.3em] text-xs font-bold mb-4 text-center"
            style={{ 
                color: '#ffffff', 
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                fontWeight: 'bold'
            }}
          >
              {t('welcome')}
          </h3>
          
          <div className="relative w-[240px] h-[110px] flex items-center justify-center">
              <img 
                src="/extras.svg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
                style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.5))' }} 
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center logo-triad-glitch">
                  <img 
                    src="/typo.svg" 
                    alt="Martinika Logo" 
                    className="w-full h-full object-contain" 
                    style={{ filter: 'brightness(0) invert(1)', paddingBottom: '5px' }} 
                  />
              </div>
          </div>
          
          <div 
            className="mt-4 transform -skew-x-6 shadow-md"
            style={{ 
                border: '2px solid #ffffff', 
                backgroundColor: 'rgba(0,0,0,0.4)', 
                color: '#ffffff',
                padding: '4px 24px'
            }}
          >
              <h2 className="text-sm font-black tracking-[0.2em] uppercase transform skew-x-6" style={{ color: '#ffffff' }}>
                  {t('album')}
              </h2>
          </div>
      </div>

      {/* 5. INFO TECNICA */}
      <div className="absolute bottom-[60px] right-[15px] z-40 flex flex-col items-end text-right">
          <h2 className="text-[3rem] font-black tracking-tighter leading-none drop-shadow-lg" style={{ color: '#ffffff' }}>{t('hd')}</h2>
          
          <div className="bg-[#ffcc00] text-black px-2 py-0.5 mb-1 transform skew-x-[-10deg]">
              <span className="block font-black tracking-[0.15em] text-[10px] transform skew-x-[10deg]">{t('ultra_color')}</span>
          </div>
          
          <div className="flex flex-col items-end gap-1">
             <div className="font-mono text-[9px] font-bold bg-white/10 px-2 py-1 border border-white/50 backdrop-blur-md" style={{ color: '#ffffff' }}>{t('stereo')}</div>
             <div className="font-mono text-[9px] font-bold bg-white/10 px-2 py-1 border border-white/50 backdrop-blur-md" style={{ color: '#ffffff' }}>SP 120 MIN.</div>
          </div>
      </div>

      {/* 6. BARRA VIDEO INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#08080a] border-t-2 border-white/20 z-50 flex justify-center">
         <div className="w-full px-4 flex items-center justify-between h-full text-white">
             <span className="font-black text-xl tracking-widest">VIDEO</span>
             <div className="flex items-center gap-2 font-mono text-sm tracking-[0.2em]">
                 <span className="text-[#ffcc00] animate-pulse">▶</span> <span>00:02:46</span>
             </div>
         </div>
      </div>
    </section>
  );
};

export default HeroMobile;