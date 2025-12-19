import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/components/Header';
import Inicio from './pages/inicio/Inicio';
import Favoritos from './pages/favoritos/Favoritos';
import Categorias from './pages/categorias/Categorias';
import Footer from './pages/components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/categorias" element={<Categorias />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
