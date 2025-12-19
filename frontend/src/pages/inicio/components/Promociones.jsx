import React from 'react';

function Promociones(){
  const promos = [
    {
      id: 1,
      titulo: "VIDEOJUEGOS",
      imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1000",
      bgColor: "bg-[#2d4a3e]",
    },
    {
      id: 2,
      titulo: "MAQUILLAJE",
      imagen: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
      bgColor: "bg-[#2d4a3e]",
    },
    {
      id: 3,
      titulo: "CUIDADO PERSONAL",
      imagen: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1000",
      bgColor: "bg-[#2d4a3e]",
    },
    {
        id: 4,
        titulo: "Relojes",
        imagen: "https://telotengocompany.com/cdn/shop/files/IMG_0344_c1e1482e-1a71-4326-9c2e-f4c66477681a.webp?v=1752281742&width=1946",
        bgColor: "bg-[#2d4a3e]"
    },
    {
        id: 5,
        titulo: "Calzado",
        imagen: "https://suvenir.pe/cdn/shop/files/3_35e5e284-6acd-44da-b73d-8e26d10acb78_650x_crop_center.png?v=1764794659",
        bgColor: "bg-[#2d4a3e]"
    },
    {
        id: 6,
        titulo: "Audifonos",
        imagen: "https://images-na.ssl-images-amazon.com/images/I/51eAAfWKDdL._AC_UL495_SR435,495_.jpg",
        bgColor: "bg-[#2d4a3e]"
    },
    {
        id: 7,
        titulo: "Owala",
        imagen: "https://i.etsystatic.com/46271992/r/il/6f479d/7375759104/il_fullxfull.7375759104_ehyn.jpg",
        bgColor: "bg-[#2d4a3e]"
    },
    {
        id: 8,
        titulo: 'Accesorios',
        imagen: 'https://cdn.shopify.com/s/files/1/0071/5764/5415/files/descarga_3_f9385372-88d0-4beb-aee7-dc4f43b65f4c.png?v=1724100476',
        bgColor: "bg-[#2d4a3e]"
    },
    {
        id: 9,
        titulo: "Celulares",
        imagen: "https://libero.cronosmedia.glr.pe/original/2025/10/05/68e2f1b637d01bc361019cf8.jpg",
        bgColor: "bg-[#2d4a3e]"
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto pt-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#333333] mb-8">
        El regalo <span className="text-[#add600]">perfecto.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden">
        {promos.map((promo) => (
          <div 
            key={promo.id} 
            className={`relative h-[400px] md:h-[500px] cursor-pointer group overflow-hidden ${promo.bgColor}`}
          >
            {/* Imagen de fondo con efecto zoom */}
            <img 
              src={promo.imagen} 
              alt={promo.titulo} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />

            {/* Overlay de texto superior */}
            <div className="absolute top-8 left-8 z-10">
              <button className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-lg md:text-xl font-bold tracking-[0.2em] drop-shadow-md">
                  {promo.titulo}
                </span>
                {/* Ícono de flecha circular */}
                <div className="border-2 border-white rounded-full p-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promociones;