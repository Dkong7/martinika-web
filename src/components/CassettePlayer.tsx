import { useState } from 'react';

const CassettePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-20 bg-[#111] flex flex-col items-center justify-center relative overflow-hidden border-t-4 border-[#ffcc00]">
      
      {/* Noise Overlay Local */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")'}}></div>

      <div className="relative z-10 w-[90%] max-w-[600px]">
        {/* Titulo Player */}
        <div className="flex justify-between items-end mb-4 text-[#00ff00] font-mono text-xs md:text-sm tracking-widest drop-shadow-[0_0_5px_rgba(0,255,0,0.8)]">
            <span>STEREO DECK 1</span>
            <span className={isPlaying ? "animate-pulse" : ""}>{isPlaying ? "PLAYING >" : "PAUSED ||"}</span>
        </div>

        {/* Cassette Container */}
        <div className="relative bg-[#222] p-4 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-[#444]">
            <div className="relative">
                <img src="/cassette.svg" alt="Cassette Tape" className="w-full h-auto drop-shadow-xl" />
                
                {/* Animación de los carretes */}
                <div className={`absolute top-[35%] left-[32%] w-[12%] h-[20%] rounded-full border-2 border-dashed border-black/50 ${isPlaying ? "animate-spin" : ""}`} style={{animationDuration: '2s'}}></div>
                <div className={`absolute top-[35%] right-[32%] w-[12%] h-[20%] rounded-full border-2 border-dashed border-black/50 ${isPlaying ? "animate-spin" : ""}`} style={{animationDuration: '2s'}}></div>
            </div>
        </div>

        {/* Controles */}
        <div className="mt-8 flex justify-center gap-8">
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#333] hover:bg-[#ffcc00] hover:text-black text-white border-2 border-[#555] px-8 py-2 rounded-sm font-black font-mono tracking-widest transition-all shadow-lg active:translate-y-1"
            >
                {isPlaying ? "STOP" : "PLAY"}
            </button>
        </div>
      </div>
    </section>
  );
};

export default CassettePlayer;