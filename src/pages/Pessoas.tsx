import dados from '../components/dados.json';
import type { InterfacePessoas } from '../components/Tipos.tsx';
import Card from '../components/Card.tsx';

const PaginaPessoas = () => {
  const pessoas = dados.pessoas as InterfacePessoas[];
  return (
    <div className="container-pagina">
      <h2>Pessoas</h2>
      <div className="lista-card">
        {pessoas.map((pessoa) => (
          <Card key={pessoa.id} item={pessoa} />
        ))}
      </div>
    </div>
  );
};

export default PaginaPessoas;