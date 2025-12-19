import { Link } from 'react-router-dom';
import React from 'react';

function FooterBanner() {
  return (
    <div className="w-full max-w-[1400px] py-8 px-4">
      <div className="relative w-full h-[180px] md:h-[220px] bg-[#b32524] rounded-sm overflow-hidden flex items-center shadow-lg">
        
        {/* Decoración Izquierda: Iconos Navideños */}
        <div className="absolute left-6 flex flex-col gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#b32524] font-bold">★</div>
          <div className="w-8 h-8 bg-[#add600] rounded-full flex items-center justify-center text-white font-bold">★</div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#b32524] font-bold">★</div>
        </div>

        {/* Sección de Texto: Logo y Categoría */}
        <div className="ml-24 md:ml-32 flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            {/* Logo Simulado Discovery */}
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold uppercase">Discovery</span>
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter italic">
              Discovery
            </h2>
          </div>
          
          <div className="h-12 w-[2px] bg-white/40 hidden md:block"></div>
          
          <h3 className="text-white text-2xl md:text-4xl font-light tracking-[0.3em] uppercase">
            Maletas
          </h3>
        </div>

        {/* Sección de Imagen: Maletas */}
        <div className="absolute right-[25%] bottom-0 h-[90%] hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=600" 
            alt="Maletas Discovery" 
            className="h-full w-auto object-contain drop-shadow-2xl translate-y-2"
          />
        </div>

        {/* Sección Derecha: Botón de Acción */}
        <div className="absolute right-8 flex items-center gap-2">
          <Link to="/categorias" className="bg-[#f3f3f3] text-[#333333] px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-white transition-all shadow-md flex items-center gap-4 group" title="Ver Productos">
            ¡Ir a productos!
            <div className="bg-[#333333] text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </Link>
        </div>

        {/* Elementos Decorativos: Copos de Nieve */}
        <div className="absolute top-4 right-1/3 opacity-40 hidden md:block">
          <span className="text-white text-3xl">❄</span>
        </div>
        <div className="absolute bottom-10 right-1/2 opacity-30 hidden md:block">
          <span className="text-white text-xl">❄</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;