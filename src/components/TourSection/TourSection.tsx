import React from 'react';
import TourSectionDesktop from './TourSectionDesktop';
import TourSectionMobile from './TourSectionMobile';

const TourSection = () => {
  return (
    <>
      {/* Versión Desktop: visible en pantallas grandes (lg en adelante) */}
      <div className="hidden lg:block">
        <TourSectionDesktop />
      </div>

      {/* Versión Mobile: visible en pantallas pequeñas (hasta lg) */}
      <div className="block lg:hidden">
        <TourSectionMobile />
      </div>
    </>
  );
};

export default TourSection;