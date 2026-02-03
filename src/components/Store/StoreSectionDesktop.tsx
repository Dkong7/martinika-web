import React, { useState } from 'react';

// Datos de productos con imágenes reales y detalles para el modal
const products = [
  {
    id: 1,
    name: 'CASSETTE ED. LIMITADA',
    price: '$45.000',
    images: ['/tienda1a.jpg', '/tienda1b.jpg'], // Fotos reales
    tag: 'SOLD OUT',
    desc: 'Edición especial en cinta cromada de alta fidelidad. Incluye booklet con letras y fotos inéditas.',
    specs: { material: 'Plástico Reciclado', print: 'UV Full Color', sizes: 'Única', color: 'Transparente / Neon' }
  },
  {
    id: 2,
    name: 'CAMISETA TOUR 2026',
    price: '$80.000',
    images: ['/tienda2a.jpg', '/tienda2b.jpg'],
    tag: 'NUEVO',
    desc: 'Camiseta oversize de algodón pesado con estampado en serigrafía de alta densidad.',
    specs: { material: 'Algodón 240g', print: 'Serigrafía Puff', sizes: 'S / M / L / XL', color: 'Negro Lavado' }
  },
  {
    id: 3,
    name: 'VINILO 180G',
    price: '$120.000',
    images: ['/tienda3a.jpg', '/tienda3b.jpg'],
    tag: 'PRE-ORDER',
    desc: 'Doble LP de 180 gramos color humo. Masterizado específicamente para vinilo.',
    specs: { material: 'Vinilo 180g', print: 'Gatefold Mate', sizes: '12 Pulgadas', color: 'Smoke Grey' }
  }
];

const StoreSectionDesktop = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#080808] py-32 overflow-hidden">
      
      {/* 1. FONDO MEJORADO (Patrón Visible + Ruido) */}
      <div className="absolute inset-0 bg-[#050505] z-0">
         {/* Rejilla Neon Tenue */}
         <div className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         {/* Manchas de color VHS */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#000033] via-transparent to-[#330000] opacity-40 mix-blend-screen"></div>
      </div>
      
      {/* TÍTULO */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="font-serif text-7xl text-[#f4f1ea] tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          MERCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc00] via-[#ff0055] to-[#9d00ff]">STORE</span>
        </h2>
        {/* Barra decorativa */}
        <div className="w-full max-w-md h-1.5 mx-auto mt-4 flex">
            <div className="flex-1 bg-[#ffcc00] shadow-[0_0_10px_#ffcc00]"></div>
            <div className="flex-1 bg-[#ff0055] shadow-[0_0_10px_#ff0055]"></div>
            <div className="flex-1 bg-[#9d00ff] shadow-[0_0_10px_#9d00ff]"></div>
            <div className="flex-1 bg-[#00ffff] shadow-[0_0_10px_#00ffff]"></div>
        </div>
      </div>

      {/* GRID PRODUCTOS */}
      <div className="relative z-10 flex gap-16">
        {products.map((prod) => (
          <div 
            key={prod.id} 
            onClick={() => setSelectedProduct(prod)}
            className="group relative w-[320px] h-[500px] bg-[#e6e2d6] p-2 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(255,0,85,0.4)] cursor-pointer"
          >
            
            {/* HEADER CARD */}
            <div className="bg-[#111] h-10 flex items-center justify-between px-4 border-b-2 border-[#333]">
              <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-full animate-pulse shadow-[0_0_8px_#ff0000]"></div>
                 <span className="text-white text-xs tracking-widest font-bold">SHOP</span>
              </div>
              <span className="text-[#ffcc00] font-mono text-sm font-bold">{prod.price}</span>
            </div>

            {/* IMAGEN PRINCIPAL */}
            <div className="relative w-full h-[300px] bg-white border-b-4 border-black overflow-hidden flex items-center justify-center group-hover:brightness-110 transition-all">
               <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
               
               {/* TAG */}
               <div className="absolute top-0 right-0 bg-[#ff0055] text-white text-[10px] font-bold px-3 py-1 uppercase shadow-md">
                 {prod.tag}
               </div>
            </div>

            {/* ZONA INFERIOR "Z" REAL */}
            <div className="relative w-full h-[160px] bg-[#050505] overflow-hidden flex flex-col p-5">
                
                {/* Texto */}
                <div className="relative z-20">
                    <h3 className="text-white text-2xl font-sans font-bold leading-none uppercase max-w-[80%] group-hover:text-[#ffcc00] transition-colors">{prod.name}</h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-[#fff] text-xs uppercase font-bold border-b border-[#ff0055] pb-0.5 group-hover:border-[#ffcc00]">
                        <span>Ver detalles</span>
                        <span className="text-[#ff0055] group-hover:text-[#ffcc00]">+</span>
                    </div>
                </div>

                {/* FORMA Z (Clip Path + Gradiente) */}
                <div 
                    className="absolute bottom-0 right-0 w-full h-full z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: 'linear-gradient(135deg, transparent 40%, #ffcc00 40%, #ffcc00 55%, #ff0055 55%, #ff0055 70%, #9d00ff 70%)',
                        clipPath: 'polygon(30% 100%, 70% 50%, 40% 50%, 80% 0%, 100% 0%, 100% 100%)' 
                    }}
                ></div>

            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop con blur */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
            
            {/* Contenido Modal */}
            <div className="relative w-full max-w-5xl bg-[#111] border border-[#333] flex flex-col md:flex-row rounded-sm shadow-[0_0_50px_rgba(255,0,85,0.2)] overflow-hidden animate-in fade-in zoom-in duration-300">
                
                {/* Botón Cerrar */}
                <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 z-50 text-white hover:text-[#ff0055] text-2xl font-bold"
                >
                    ✕
                </button>

                {/* Columna Izq: Fotos (Grid 2 fotos) */}
                <div className="w-full md:w-1/2 bg-black p-4 flex flex-col gap-4">
                    {selectedProduct.images.map((img, i) => (
                        <div key={i} className="w-full h-[300px] border border-[#333] overflow-hidden">
                            <img src={img} alt={`Foto ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                {/* Columna Der: Info */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-[#111]">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase mb-2 leading-none">
                        {selectedProduct.name}
                    </h2>
                    <p className="text-3xl font-mono text-[#ffcc00] font-bold mb-6">{selectedProduct.price}</p>
                    
                    <p className="text-[#ccc] text-sm leading-relaxed mb-8 font-mono border-l-2 border-[#ff0055] pl-4">
                        {selectedProduct.desc}
                    </p>

                    {/* Especificaciones */}
                    <div className="grid grid-cols-2 gap-4 mb-10 text-xs text-[#888] uppercase tracking-wide">
                        <div>
                            <span className="block text-[#555] font-bold">Material</span>
                            <span className="text-white">{selectedProduct.specs.material}</span>
                        </div>
                        <div>
                            <span className="block text-[#555] font-bold">Estampado</span>
                            <span className="text-white">{selectedProduct.specs.print}</span>
                        </div>
                        <div>
                            <span className="block text-[#555] font-bold">Tallas</span>
                            <span className="text-white">{selectedProduct.specs.sizes}</span>
                        </div>
                        <div>
                            <span className="block text-[#555] font-bold">Color</span>
                            <span className="text-white">{selectedProduct.specs.color}</span>
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#cc0000] via-[#ff0055] to-[#cc0000] text-white font-bold uppercase py-4 text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,0,85,0.4)] tracking-widest">
                        AGREGAR AL CARRITO
                    </button>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};

export default StoreSectionDesktop;