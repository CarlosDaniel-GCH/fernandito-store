import React, { useState, useEffect } from 'react';

const Carrusel = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
      title: 'Calzado Deportivo',
    },
    {
      url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070',
      title: 'Nuevos Ingresos',
    },
    {
      url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080',
      title: 'Colección Runner',
    },
    {
      url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964',
      title: 'Ofertas Exclusivas',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Lógica para el cambio automático cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto relative group">
      {/* Imagen del Slide */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 shadow-lg"
      >
        {/* Overlay opcional para texto */}
        <div className="flex items-end h-full p-10 bg-black/20">
           <h2 className="text-white text-4xl font-bold">{slides[currentIndex].title}</h2>
        </div>
      </div>

      {/* Botón Izquierda */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 text-white cursor-pointer transition-all">
        <button onClick={prevSlide}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
      </div>

      {/* Botón Derecha */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 text-white cursor-pointer transition-all">
        <button onClick={nextSlide}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Indicadores (Puntitos) */}
      <div className="flex justify-center py-4 gap-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              currentIndex === slideIndex ? 'bg-[#add600] w-8 h-2' : 'bg-gray-300 w-2 h-2'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;