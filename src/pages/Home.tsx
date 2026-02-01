import React from 'react';
import HeroSection from '../components/HeroSection'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  return (
    <div>
      {/* Tu Navbar irá aquí (si está fuera de la Home) */}
      <HeroSection />
      {/* El resto de tu contenido de la página de inicio */}
      <main className="container mx-auto p-8">
        {/* ... */}
      </main>
    </div>
  );
};

export default Home;