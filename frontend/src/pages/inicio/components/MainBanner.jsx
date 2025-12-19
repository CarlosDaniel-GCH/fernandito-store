import React from 'react';

function MainBanner(){
  return (
    <div className="w-full max-w-[1440px] mx-auto my-2 px-4">
      <div className="relative w-full h-[180px] md:h-[200px] flex overflow-hidden rounded-lg shadow-sm bg-[#f3f3f3]">
        
        {/* Bloque Izquierdo: Fecha y Título Verde */}
        <div className="relative w-[30%] bg-[#004a2f] flex flex-col justify-center items-center text-white px-4 text-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#add600] text-xl">★</span>
            <p className="text-sm md:text-base font-bold tracking-tight">
              DEL 01 AL 31 DE DICIEMBRE
            </p>
            <span className="text-[#add600] text-xl">★</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black leading-none text-[#add600]">
            ADELANTA LA NAVIDAD
          </h2>
          
          {/* Cinta lateral amarilla interna */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-[#add600] flex items-center justify-center">
             <span className="rotate-90 text-[10px] font-bold text-[#004a2f] whitespace-nowrap">
               FELIZ NAVIDAD
             </span>
          </div>
        </div>

        {/* Bloque Central: Promoción Principal */}
        <div className="flex-grow flex flex-col justify-center items-center px-6">
          <h1 className="text-3xl md:text-6xl font-black italic tracking-tighter flex flex-wrap justify-center gap-x-4">
            <span className="text-[#c3132c]">COMPRA HOY</span>
            <span className="text-[#004a2f]">Y PAGA FEBRERO</span>
          </h1>
          
          <div className="mt-4 flex items-center bg-[#c3132c] text-white px-4 py-1 rounded-sm gap-2">
            <span className="text-[10px] md:text-sm font-bold">SIN COSTO ADICIONAL</span>
            <span className="text-[10px] md:text-xs border-l border-white/50 pl-2">EXCLUSIVO CON</span>
            <div className="bg-white px-1 rounded-sm">
               <span className="text-[#004a2f] font-black text-[10px]">CMR</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainBanner;