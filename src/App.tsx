import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import TourSection from './components/TourSection/TourSection'; 
// --- CORRECCIÓN DE RUTA AQUÍ (Carpeta 'Store') ---
import StoreSection from './components/Store/StoreSection'; 
// --------------------------------------------------
import Footer from './components/Footer/Footer';
import Player from './components/CassettePlayer/Player'; 
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden selection:bg-[#ff0033] selection:text-white">
          
          <Navbar />
          
          <main className="relative z-10 w-full pt-0">
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        
                        {/* 1. Player */}
                        <Player />

                        {/* 2. Tour */}
                        <TourSection />

                        {/* 3. Tienda */}
                        <StoreSection />

                        {/* 4. Footer */}
                        <Footer />
                    </>
                } />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;