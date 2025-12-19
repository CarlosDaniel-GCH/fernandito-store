import { Link } from 'react-router-dom';
import React from 'react';

function HoldingBanner(){
  const categories = [
    {
      id: 1,
      tag: "LO ÚLTIMO EN",
      title: "MODA MUJER",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000", // Imagen de moda
      bgColor: "bg-gray-100"
    },
    {
      id: 2,
      tag: "TODO LO QUE NECESITAS",
      title: "BELLEZA",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000", // Imagen de perfume/belleza
      bgColor: "bg-gray-100"
    },
    {
      id: 3,
      tag: "ESTILO Y CALIDAD",
      title: "ACCESORIOS",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000", // Imagen de bolso/cartera
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <section className="w-full p-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center group cursor-pointer">
              
              {/* Contenedor del Círculo */}
              <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-sm transition-transform duration-500 group-hover:scale-105">
                {/* Fondo circular suave */}
                <div className={`absolute inset-0 ${cat.bgColor} rounded-full`}></div>
                
                {/* Imagen */}
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Textos a la derecha */}
              <div className="ml-6">
                <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">
                  {cat.tag}
                </p>
                <Link to="/categorias" className="text-2xl md:text-3xl font-black text-gray-900 leading-tight" title='Ver Productos'>
                  {cat.title}
                </Link>
                {/* Línea decorativa que crece al hacer hover */}
                <div className="w-8 h-1 bg-[#add600] mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoldingBanner;