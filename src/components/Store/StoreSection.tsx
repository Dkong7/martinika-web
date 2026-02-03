import React from 'react';
import StoreSectionDesktop from './StoreSectionDesktop';
import StoreSectionMobile from './StoreSectionMobile';

const StoreSection = () => {
  return (
    <section id="tienda">
      {/* Desktop */}
      <div className="hidden lg:block">
        <StoreSectionDesktop />
      </div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <StoreSectionMobile />
      </div>
    </section>
  );
};

export default StoreSection;