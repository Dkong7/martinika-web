import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/Hero/HeroSection'; // <--- OJO AQUÍ: CARPETA EXTRA
import CassettePlayer from './components/CassettePlayer';
import { LanguageProvider } from './context/LanguageContext';

const Placeholder = ({ title }: { title: string }) => (
    <div className="flex items-center justify-center h-[60vh] text-[#00ff00] font-mono text-lg tracking-widest animate-pulse opacity-80 border border-[#00ff00]/10 m-8 bg-black/20">
        {title}
    </div>
);

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
                        <CassettePlayer />
                    </>
                } />
                <Route path="/musica" element={<div className="container mx-auto pt-[150px]"><Placeholder title="AUDIO DATA ENCRYPTED" /></div>} />
                <Route path="/conciertos" element={<div className="container mx-auto pt-[150px]"><Placeholder title="TOUR DATES UPLOADING" /></div>} />
                <Route path="/tienda" element={<div className="container mx-auto pt-[150px]"><Placeholder title="MERCH STORE OFFLINE" /></div>} />
                <Route path="/bio" element={<div className="container mx-auto pt-[150px]"><Placeholder title="BIOMETRIC DATA PROCESSING" /></div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;