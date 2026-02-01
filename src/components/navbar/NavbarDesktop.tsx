import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import GlitchLogo from '../GlitchLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavbarDesktop = () => {
  const { lang, toggleLang, t } = useLanguage(); 
  const location = useLocation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('music'), path: '/musica' }, 
    { name: t('tour'), path: '/conciertos' },
    { name: t('store'), path: '/tienda' },
    { name: t('bio'), path: '/bio' },
  ];

  // Estilos constantes para los botones
  const btnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 36px',
    border: '1px solid #333',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    textDecoration: 'none',
    position: 'relative' as const,
    transition: 'all 0.2s',
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10"
      style={{ 
          backgroundColor: 'rgba(5, 5, 5, 0.9)', 
          backdropFilter: 'blur(4px)',
          height: '120px' 
      }}
    >
      
      <div 
        className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-between relative z-20"
        style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            height: '100%',
            /* AQUÍ ESTÁ EL CAMBIO: Padding forzado a los lados */
            paddingLeft: '80px',
            paddingRight: '80px',
            boxSizing: 'border-box' // Asegura que el padding no rompa el ancho
        }}
      >
        
        {/* --- 1. IZQUIERDA: LOGO --- */}
        <div className="relative h-full flex items-center justify-center w-[165px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img 
                    src="/extras.svg" 
                    alt="" 
                    className="w-full h-[85%] object-contain object-left extras-neon"
                />
            </div>

            <Link to="/" className="relative z-10 block w-full pl-2">
                 <div className="logo-triad-glitch" style={{ width: '148px', paddingBottom: '11px', paddingLeft: '10px' }}>
                    <div className="invert-white">
                        <GlitchLogo />
                    </div>
                 </div>
            </Link>
        </div>

        {/* --- 2. CENTRO: NAVEGACIÓN --- */}
        <nav 
            style={{ 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                display: 'flex', 
                gap: '16px' 
            }}
        >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              const currentStyle = isActive 
                ? { ...btnStyle, backgroundColor: '#fff', color: '#000', borderColor: '#ffcc00' }
                : { ...btnStyle, backgroundColor: 'rgba(0,0,0,0.9)', color: '#eee' };

              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  style={currentStyle}
                  className="group hover:bg-white hover:text-black hover:border-[#ffcc00] hover:-translate-y-0.5"
                >
                  <span style={{ 
                      position: 'absolute', top: '10px', left: '10px', width: '12px', height: '4px', 
                      background: 'linear-gradient(90deg, #ffcc00, #ff0033, #9900cc)' 
                  }}></span>
                  {link.name}
                </Link>
              );
            })}
        </nav>

        {/* --- 3. DERECHA: IDIOMA --- */}
        <div className="ml-auto">
            <button 
                onClick={toggleLang} 
                className="group hover:bg-white hover:text-black transition-colors"
                style={{ 
                    backgroundColor: '#000', 
                    color: '#fff', 
                    border: '2px solid #fff', 
                    padding: '6px 16px', 
                    fontWeight: '800', 
                    display: 'flex', 
                    gap: '8px', 
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <FontAwesomeIcon icon={faGlobe} className="text-sm" />
                <span className="tracking-widest pt-1">{lang}</span>
                <FontAwesomeIcon icon={faCaretDown} className="text-xs opacity-50" />
            </button>
        </div>

      </div>

      {/* 4. LÍNEA INFERIOR COLORIDA */}
      <div 
        className="w-full h-1.5 absolute bottom-0 left-0 z-50"
        style={{ background: 'linear-gradient(to right, #ffcc00, #ff0033, #9900cc)' }}
      ></div>
    </header>
  );
};

export default NavbarDesktop;