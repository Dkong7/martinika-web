import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-[#000] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* REDES SOCIALES (ICONOS SVG) */}
        <div className="flex gap-8 mb-10">
          
          {/* Instagram */}
          <a href="#" className="text-gray-400 hover:text-[#ff0055] transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:drop-shadow-[0_0_8px_#ff0055]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Spotify */}
          <a href="#" className="text-gray-400 hover:text-[#00ff99] transition-colors group">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:drop-shadow-[0_0_8px_#00ff99]">
                 <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
             </svg>
          </a>

          {/* YouTube */}
          <a href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors group">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:drop-shadow-[0_0_8px_#ff0000]">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
             </svg>
          </a>

        </div>

        {/* LOGO TYPO SVG - FORZADO A BLANCO */}
        <div className="mb-10 opacity-80 hover:opacity-100 transition-opacity">
           <img 
             src="/typo.svg" 
             alt="Martinika Logo" 
             className="h-16 w-auto"
             // brightness-0 lo vuelve negro solido, invert lo invierte a blanco solido.
             style={{ filter: 'brightness(0) invert(1)' }} 
           />
        </div>

        {/* CREDITOS */}
        <div className="flex flex-col items-center gap-2 text-center border-t border-[#222] pt-6 w-full max-w-md">
          <p className="text-[#444] text-[10px] uppercase tracking-wider">
            © 2026 Martinika. All rights reserved.
          </p>
          
          <p className="text-[#333] text-[9px] font-mono mt-2 flex items-center gap-1 hover:text-[#666] transition-colors">
            developed by D from 
            <span className="font-bold text-[#555]">Willow Tree Media</span> 
            <span className="mx-1 opacity-30">|</span> 
            <a href="https://www.thisiswillowtree.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline decoration-[#333]">
              www.thisiswillowtree.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;