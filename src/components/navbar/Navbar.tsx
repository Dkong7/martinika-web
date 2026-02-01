import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  return (
    <>
      {/* CSS DE EMERGENCIA: Fuerza la visibilidad según el ancho de pantalla */}
      <style>{`
        .nav-view-desktop { display: none; width: 100%; }
        .nav-view-mobile { display: block; width: 100%; }
        
        @media (min-width: 1024px) {
          .nav-view-desktop { display: block !important; }
          .nav-view-mobile { display: none !important; }
        }
      `}</style>

      <div className="nav-view-desktop">
        <NavbarDesktop />
      </div>
      <div className="nav-view-mobile">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navbar;