import dados from '../components/dados.json';
import type { InterfaceLivros } from '../components/Tipos.tsx';
import Card from '../components/Card.tsx';

const PaginaLivros = () => {
  const livros = dados.livros as InterfaceLivros[];
  return (
    <div className="container-pagina">
      <h2>Livros</h2>
      <div className="lista-card">
        {livros.map((livro) => (
          <Card key={livro.id} item={livro} />
        ))}
      </div>
    </div>
  );
};

export default PaginaLivros;