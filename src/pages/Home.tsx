import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
// CORRECCIÓN AQUÍ: Agregamos "/TourSection" al final de la ruta
import TourSection from '../components/TourSection/TourSection'; 

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <main className="relative z-10 bg-[#050505]">
        
        {/* Sección de Fechas */}
        <TourSection />

        {/* Aquí irán futuras secciones (Tienda, Bio, etc.) */}
      
      </main>
    </div>
  );
};

export default Home;