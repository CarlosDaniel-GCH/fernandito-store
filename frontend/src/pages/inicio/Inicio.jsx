import Carrusel from './components/Carrusel';
import HoldingBanner from './components/HoldingBanner';
import MainBanner from './components/MainBanner';
import Promociones from './components/Promociones'
import FooterBanner from './components/FooterBanner';

function Inicio(){
    return(
        <div>
            <Carrusel />
            <HoldingBanner />
            <MainBanner />
            <Promociones />
            <FooterBanner />
        </div>
    )
}

export default Inicio