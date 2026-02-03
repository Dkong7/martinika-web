import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

const HeroSection = () => {
  return (
    <>
      {/* Forzamos la lógica de visualización con CSS puro para que no falle */}
      <style>{`
        .vhs-view-desktop { display: none; width: 100%; height: 100%; }
        .vhs-view-mobile { display: block; width: 100%; height: 100%; }
        
        @media (min-width: 1024px) {
          .vhs-view-desktop { display: block !important; }
          .vhs-view-mobile { display: none !important; }
        }
      `}</style>

      {/* Contenedor Desktop */}
      <div className="vhs-view-desktop">
        <HeroDesktop />
      </div>

      {/* Contenedor Mobile */}
      <div className="vhs-view-mobile">
        <HeroMobile />
      </div>
    </>
  );
};

export default HeroSection;