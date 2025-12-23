import ListaFavoritos from './componentes/ListaFavoritos';

function Favoritos(){
    return(
        <div className="flex flex-col gap-4 w-full bg-zinc-200 p-4 overflow-hidden">
            <div className="w-full min-h-[300px] rounded-lg bg-white px-4 py-2">
                <ListaFavoritos />
            </div>
        </div>
    )
}

export default Favoritos