import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarMobile = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('music'), path: '/musica' }, 
    { name: t('tour'), path: '/conciertos' },
    { name: t('store'), path: '/tienda' },
    { name: t('bio'), path: '/bio' },
  ];

  return (
    <header 
        className="fixed top-0 left-0 z-[100]"
        style={{ 
            width: '100%',
            height: '80px',
            backgroundColor: '#000000',
            borderBottom: '1px solid #222',
            boxSizing: 'border-box' /* IMPORTANTE: Evita desbordamiento lateral */
        }}
    >
      
      {/* CONTENEDOR PRINCIPAL */}
      <div 
        className="flex items-center justify-between w-full h-full"
        style={{ 
            paddingLeft: '20px', 
            paddingRight: '20px',
            boxSizing: 'border-box' /* Asegura que el padding no rompa el ancho */
        }}
      >
          
          {/* 1. LOGO */}
          <Link to="/" onClick={() => setIsOpen(false)}>
               <div 
                  style={{ 
                      width: '130px',
                      height: '50px', 
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                  }}
               >
                   {/* Fondo (Extras) */}
                   <img 
                     src="/extras.svg" 
                     alt="" 
                     style={{ 
                         position: 'absolute',
                         top: 0, left: 0,
                         width: '100%', height: '100%',
                         objectFit: 'contain',
                         filter: 'brightness(0) invert(1)', 
                         opacity: 0.6
                     }} 
                   />
                   {/* Frente (Typo) */}
                   <img 
                     src="/typo.svg" 
                     alt="Martinika" 
                     style={{ 
                        position: 'relative',
                        zIndex: 10,
                        width: '90%', 
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)' 
                     }} 
                   />
               </div>
          </Link>

          {/* 2. CONTROLES DERECHA */}
          <div className="flex items-center gap-3">
              {/* Botón IDIOMA */}
              <button 
                  onClick={toggleLang} 
                  style={{ 
                      color: '#ffffff',
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.7)',
                      padding: '4px 8px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      minWidth: '36px'
                  }}
              >
                  {lang}
              </button>

              {/* Botón HAMBURGUESA */}
              <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  style={{ 
                      width: '44px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isOpen ? '#ffffff' : '#000000',
                      color: isOpen ? '#000000' : '#ffffff',
                      border: '2px solid #ffffff',
                      fontSize: '20px',
                      cursor: 'pointer'
                  }}
              >
                  <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
              </button>
          </div>
      </div>

      {/* 3. LÍNEA VHS HORIZONTAL APILADA (CAMBIO AQUÍ) */}
      <div 
        className="absolute bottom-0 left-0 w-full flex z-[110]"
        style={{ 
            flexDirection: 'column', /* Apilar verticalmente */
            boxShadow: '0 -2px 8px rgba(255, 204, 0, 0.4)' /* Brillo hacia arriba */
        }}
      >
          {/* Líneas horizontales delgadas */}
          <div style={{ width: '100%', height: '2px', backgroundColor: '#ffcc00' }}></div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#ff6600' }}></div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#ff0033' }}></div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#9900cc' }}></div>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#0033cc' }}></div>
      </div>

      {/* 4. MENÚ DESPLEGABLE */}
      {isOpen && (
        <nav 
            className="absolute left-0 w-full bg-[#08080a] flex flex-col z-40 animate-slide-down"
            style={{ 
                top: '80px', 
                height: 'calc(100vh - 80px)',
                borderTop: '2px solid #ffcc00',
                boxSizing: 'border-box'
            }}
        >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                {navLinks.map((link) => (
                    <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsOpen(false)}
                        style={{ 
                            color: '#ffffff',
                            fontFamily: 'sans-serif',
                            fontWeight: '900',
                            fontSize: '2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            textShadow: '3px 3px 0px #333'
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            
            {/* Decoración inferior */}
            <div className="absolute bottom-10 w-full text-center opacity-60">
                <p className="text-[#ffcc00] font-mono text-xs tracking-[0.3em] animate-pulse">/// REC ● ///</p>
            </div>
        </nav>
      )}

    </header>
  );
};

export default NavbarMobile;