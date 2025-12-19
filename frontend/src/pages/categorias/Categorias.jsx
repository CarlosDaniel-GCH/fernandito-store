import Productos from "./components/Productos"

function Categorias(){
    return(
        <div className="flex flex-col gap-4 w-full bg-zinc-200 p-4 overflow-hidden">
            <div className="w-full rounded-lg bg-white px-4 py-2">
                <Productos />
            </div>
        </div>
    )
}

export default Categorias