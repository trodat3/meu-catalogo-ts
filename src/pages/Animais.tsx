import dados from '../components/dados.json';
import type { InterfaceAnimais } from '../components/Tipos.tsx';
import Card from '../components/Card.tsx';

const PaginaAnimais = () => {
  const animais = dados.animais as InterfaceAnimais[];
  return (
    <div className="container-pagina">
      <h2>Animais</h2>
      <div className="lista-card">
        {animais.map((animal) => (
          <Card key={animal.id} item={animal} />
        ))}
      </div>
    </div>
  );
};

export default PaginaAnimais;