import React, { useState, useEffect } from 'react';
import { getProducts } from '../service/productoService';
import { addFavoritos } from '../service/addFavoritos';

const Categorias = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mensajeAgregado, setMensajeAgregado] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productosList = await getProducts();
                
                setProducts(productosList.productos);
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

    const handleAgregarFavoritos = async (idProducto) => {
        try {
            await addFavoritos(idProducto);

            setMensajeAgregado('Producto agregado a favoritos');

            setTimeout(() => {
                setMensajeAgregado('');
            }, 2000);
        } catch (error) {
            console.error("Error al agregar el producto a favoritos:", error);
        }
    };

    return (
        <div className="max-w-[1440px] mx-auto p-6">

            {/* Mensaje*/}
            {mensajeAgregado && (
                <div className="fixed bottom-6 right-6 bg-white text-zinc-800 border-l-4 border-[#add600] p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out opacity-90">
                    {mensajeAgregado}
                </div>
            )}

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
                            <button onClick={() => handleAgregarFavoritos(item.id)} className="w-full mt-4 bg-[#add600] text-white py-2 rounded-full font-bold text-xs transition-colors uppercase">
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