import { Link } from 'react-router-dom';
import './Navegacao.css';

const Navegacao = () => {
  return (
    <nav className="navegacao">
      <Link to="/animais">Animais</Link>
      <Link to="/livros">Livros</Link>
      <Link to="/pessoas">Pessoas</Link>
      <Link to="/favoritos">Favoritos</Link>
    </nav>
  );
};

export default Navegacao;