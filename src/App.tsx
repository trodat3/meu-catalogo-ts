import { Routes, Route, Navigate } from 'react-router-dom';
import Navegacao from './components/Navegacao.tsx';
import PaginaAnimais from './pages/Animais.tsx';
import PaginaLivros from './pages/Livros.tsx';
import PaginaPessoas from './pages/Pessoas.tsx';
import PaginaFavoritos from './pages/Favoritos.tsx';
import './App.css';

const App = () => {
  return (
    <div className="container-app">
      <Navegacao />
      <div className="conteudo">
        <Routes>
          <Route path="/" element={<Navigate to="/animais" />} />
          <Route path="/animais" element={<PaginaAnimais />} />
          <Route path="/livros" element={<PaginaLivros />} />
          <Route path="/pessoas" element={<PaginaPessoas />} />
          <Route path="/favoritos" element={<PaginaFavoritos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
