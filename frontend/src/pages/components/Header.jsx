import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="w-full bg-white border-b border-gray-200 p-4 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                
                {/* Lado Izquierdo: Logo y Menú */}
                <Link to="/" className="flex items-center gap-6 flex-shrink-0" title='Ir a Inicio'>
                    <div className="text-[#add600] text-3xl font-bold tracking-tighter cursor-pointer">
                        fernanditostore<span className="text-[#add600]">.com</span>
                    </div>
                </Link>

                {/* Barra de búsqueda */}
                <div className="flex-grow max-w-2xl relative flex items-center">
                    <input
                        type="text"
                        placeholder="Buscar en fernanditostore.com"
                        className="w-full border border-gray-300 rounded-full py-2.5 px-6 pr-14 focus:outline-none focus:ring-1 focus:ring-gray-400 text-[15px] placeholder-gray-500"
                    />
                    <button className="absolute right-0 bg-[#334155] text-white rounded-full w-12 h-11 flex items-center justify-center hover:bg-slate-700 transition-colors border-2 border-white">
                        {/* Icono Lupa */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-3 text-[#333333] flex-shrink-0">
                    {/* Icono Productos (Cuadrícula) */}
                    <Link 
                        to="/categorias" 
                        className="p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center justify-center"
                        title="Ver Categorías"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </Link>

                    {/* Icono Favoritos (Corazón) */}
                    <Link to="/favoritos" className="p-2 hover:bg-gray-50 rounded-full transition-colors" title='Ver Favoritos'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header