import React, {useState, useEffect} from 'react';
import { getFavoritos } from '../service/favoritoService';

function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavoritos = () => {
            try{
                const data = getFavoritos();

                if(data && data.favoritos){
                    setFavoritos(data.favoritos);
                }
                else{
                    setFavoritos(data);
                }
            }
            catch(error){
                console.log("Error:", error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchFavoritos();
    }, []);

    if(loading) return <div className="flex justify-center p-10 font-bold">Cargando favoritos...</div>

    return(
        <div className="max-w-[1440px] mx-auto p-6">
            <h1 className="text-3xl font-black mb-8 border-b-4 border-[#add600] inline-block">
                FAVORITOS
            </h1>

            {/* Grid para mostrar los productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {favoritos.length > 0 ? (
                    favoritos.map((item) => (
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
    )
}

export default Favoritos