import HeroSection from '../components/Hero/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      <main 
        className="container mx-auto p-8"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Aquí irá el contenido adicional (Tienda, Bio, etc.) */}
      </main>
    </div>
  );
};

export default Home;