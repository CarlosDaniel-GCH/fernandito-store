import ListaFavoritos from './componentes/ListaFavoritos';

function Favoritos(){
    return(
        <div className="flex flex-col gap-4 w-full bg-zinc-200 p-4 overflow-hidden">
            <div className="w-full min-h-[300px] rounded-lg bg-white px-4 py-2">
                <h1 className="flex flex-col w-[300px] text-3xl font-black px-6 pt-4 gap-2">
                    MIS FAVORITOS
                    <span className="border-b-4 border-[#add600]"></span>
                </h1>

                <div>
                    <ListaFavoritos />
                </div>
            </div>
        </div>
    )
}

export default Favoritos