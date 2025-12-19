import React, { useState, useEffect } from 'react';
// 1. Importamos la función desde tu archivo JS
import { getProducts } from '../service/productoService'; 

const Categorias = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // 2. Llamamos a la función asíncrona
                const data = await getProducts();
                
                // 3. Accedemos a la propiedad donde Laravel envía los datos
                // (Si tu controlador envía return response()->json(['productos' => $p]))
                if (data && data.productos) {
                    setProducts(data.productos);
                } else {
                    // Si mandas el array directo: setProducts(data);
                    setProducts(data);
                }
            } catch (error) {
                console.error("Error al cargar los productos en el componente", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="flex justify-center p-10 font-bold">Cargando productos...</div>;
    }

    return (
        <div className="max-w-[1440px] mx-auto p-6">
            <h1 className="text-3xl font-black mb-8 border-b-4 border-[#add600] inline-block">
                CATEGORÍAS
            </h1>

            {/* Grid para mostrar los productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                    products.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow group">
                            <div className="relative overflow-hidden rounded-md mb-4 h-64 bg-gray-100">
                                <img 
                                    src={item.imagen} 
                                    alt={item.nombre} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            <h3 className="text-gray-800 font-bold uppercase text-sm">{item.nombre}</h3>
                            <h3 className="text-gray-800 uppercase text-sm">{item.descripcion}</h3>
                            <p className="text-gray-800 line-through text-md mt-3">S/ {item.precio_original}</p>
                            <p className="text-red-500 font-bold text-md">S/ {item.precio_actual}</p>
                            <button className="w-full mt-4 bg-[#add600] text-white py-2 rounded-full font-bold text-xs transition-colors uppercase">
                                Agregar a favoritos
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No se encontraron productos.</p>
                )}
            </div>
        </div>
    );
};

export default Categorias;