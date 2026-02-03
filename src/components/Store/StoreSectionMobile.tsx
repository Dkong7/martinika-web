import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'CASSETTE LIMITADA',
    price: '$45K',
    images: ['/tienda1a.jpg', '/tienda1b.jpg'],
    tag: 'SOLD OUT',
    desc: 'Edición especial cinta cromada.',
    specs: { material: 'Plástico', print: 'UV Full', sizes: 'Única', color: 'Neon' }
  },
  {
    id: 2,
    name: 'CAMISETA TOUR',
    price: '$80K',
    images: ['/tienda2a.jpg', '/tienda2b.jpg'],
    tag: 'NUEVO',
    desc: 'Algodón pesado, serigrafía puff.',
    specs: { material: 'Algodón', print: 'Puff', sizes: 'S-XL', color: 'Negro' }
  },
  {
    id: 3,
    name: 'VINILO 180G',
    price: '$120K',
    images: ['/tienda3a.jpg', '/tienda3b.jpg'],
    tag: 'PRE-ORDER',
    desc: 'Doble LP masterizado para vinilo.',
    specs: { material: 'Vinilo', print: 'Gatefold', sizes: '12"', color: 'Gris' }
  }
];

const StoreSectionMobile = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="relative w-full py-20 bg-[#050505] overflow-hidden">
      
      {/* FONDO */}
      <div className="absolute inset-0 bg-[#050505]">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <h2 className="font-serif text-4xl text-[#f4f1ea] mb-8 text-center">
          MERCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] to-[#ff0055]">STORE</span>
        </h2>

        <div className="flex flex-col gap-8 w-full">
          {products.map((prod) => (
            <div key={prod.id} onClick={() => setSelectedProduct(prod)} className="relative w-full bg-[#e6e2d6] p-1 rounded-sm shadow-lg active:scale-95 transition-transform">
              
              <div className="bg-[#111] h-8 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-[#ffcc00] font-mono text-xs font-bold">{prod.price}</span>
              </div>

              <div className="relative w-full h-[220px] bg-white border-b-4 border-black flex items-center justify-center overflow-hidden">
                 <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                 <div className="absolute top-2 right-2 bg-black text-white text-[9px] font-bold px-2 py-0.5 uppercase">
                   {prod.tag}
                 </div>
              </div>

              <div className="relative w-full h-[100px] bg-[#050505] overflow-hidden p-4 flex flex-col justify-center">
                  <div className="relative z-20">
                      <h3 className="text-white text-lg font-sans font-bold leading-none uppercase max-w-[70%]">{prod.name}</h3>
                      <span className="text-[#ffcc00] text-[9px] uppercase font-bold underline mt-2 block">Ver más...</span>
                  </div>
                  
                  {/* Forma Z Mobile */}
                  <div 
                    className="absolute bottom-0 right-0 w-full h-full z-10 opacity-80 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, transparent 30%, #ffcc00 30%, #ffcc00 50%, #ff0055 50%, #ff0055 70%, #9d00ff 70%)',
                        clipPath: 'polygon(40% 100%, 70% 50%, 50% 50%, 80% 0%, 100% 0%, 100% 100%)' 
                    }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL MOBILE --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
            
            <div className="relative w-full h-[90vh] bg-[#111] rounded-t-xl overflow-y-auto animate-in slide-in-from-bottom duration-300 border-t border-[#333]">
                <button 
                    onClick={() => setSelectedProduct(null)}
                    className="fixed top-4 right-4 z-[110] bg-black/50 rounded-full w-8 h-8 text-white flex items-center justify-center font-bold"
                >✕</button>

                <div className="p-4 flex flex-col gap-4 pb-20">
                    {selectedProduct.images.map((img, i) => (
                        <img key={i} src={img} className="w-full rounded-sm border border-[#333]" alt="" />
                    ))}
                    
                    <div className="mt-2">
                        <h2 className="text-2xl font-bold text-white uppercase leading-none">{selectedProduct.name}</h2>
                        <p className="text-xl text-[#ffcc00] font-mono font-bold mt-1">{selectedProduct.price}</p>
                        <p className="text-[#ccc] text-xs mt-4 font-mono">{selectedProduct.desc}</p>
                        
                        <div className="grid grid-cols-2 gap-3 mt-6 text-[10px] uppercase text-[#888]">
                            <div><span className="block font-bold text-[#555]">Material</span> {selectedProduct.specs.material}</div>
                            <div><span className="block font-bold text-[#555]">Talla</span> {selectedProduct.specs.sizes}</div>
                        </div>

                        <button className="w-full mt-8 bg-[#ff0055] text-white font-bold py-3 uppercase rounded-sm shadow-[0_0_15px_#ff0055]">
                            COMPRAR AHORA
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default StoreSectionMobile;