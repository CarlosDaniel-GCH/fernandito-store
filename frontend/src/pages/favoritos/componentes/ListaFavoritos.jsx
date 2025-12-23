import React, {useState, useEffect} from 'react';
import { getFavoritos } from '../service/favoritoService';
import { getProducts } from '../../categorias/service/productoService';
import { eliminarFavoritos } from '../service/eliminarFavoritos';

function Favoritos(){
    const [productos, setProducts] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mensajeEliminado, setMensajeEliminado] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            try{
                const favoritosList = await getFavoritos();
                const productosList = await getProducts();

                setFavoritos(favoritosList.favoritos);
                setProducts(productosList.productos);
            }
            catch(error){
                console.log("Error:", error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading) return <div className="flex justify-center p-10 font-bold">Cargando favoritos...</div>

    const productosFavoritos = productos.map(producto => {
        const fav = favoritos.find(f => f.id_producto === producto.id);

        if (fav) {
            return { ...producto, id_favorito: fav.id };
        }

        return null;
    })
    .filter(Boolean);

    // Para eliminar favoritos
    const handleEliminarFavorito = async (idFavorito) => {
        try {
            await eliminarFavoritos(idFavorito);

            setFavoritos(prevFavoritos => prevFavoritos.filter(favorito => favorito.id !== idFavorito));

            setMensajeEliminado('Producto eliminado');

            setTimeout(() => {
                setMensajeEliminado('');
            }, 2000);
        } catch (error) {
            console.log("Error al eliminar el favorito:", error);
        }
    };

    return(
        <div className="max-w-[1440px] mx-auto p-6">
            <h1 className="text-3xl font-black mb-8 border-b-4 border-[#add600] inline-block">
                MIS FAVORITOS
            </h1>

            {/* Mensaje */}
            {mensajeEliminado && (
                <div className="fixed bottom-6 right-6 bg-white text-zinc-800 border-l-4 border-[#add600] p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out opacity-90">
                    {mensajeEliminado}
                </div>
            )}

            {/* Grid para mostrar los productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productosFavoritos.length > 0 ? (
                    productosFavoritos.map((productos) => (
                        <div key={productos.id} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow group">
                            <div className="relative overflow-hidden rounded-md mb-4 h-64 bg-gray-100">
                                <img 
                                    src={productos.imagen}
                                    alt={productos.nombre} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>
                            <h3 className="text-gray-800 font-bold uppercase text-sm">{productos.nombre}</h3>
                            <h3 className="text-gray-800 uppercase text-sm">{productos.descripcion}</h3>
                            <p className="text-gray-800 line-through text-md mt-3">S/ {productos.precio_original}</p>
                            <p className="text-red-500 font-bold text-md">S/ {productos.precio_actual}</p>
                            <button onClick={() => handleEliminarFavorito(productos.id_favorito)} className="w-full mt-4 bg-[#add600] text-white py-2 rounded-full font-bold text-xs transition-colors uppercase">
                                Eliminar de favoritos
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full py-[50px] text-center text-gray-500">No se encontraron productos.</p>
                )}
            </div>
        </div>
    )
}

export default Favoritos