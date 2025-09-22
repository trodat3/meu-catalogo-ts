import { useFavoritos } from '../context/Favoritos.tsx';
import Card from '../components/Card.tsx';

const PaginaFavoritos = () => {
  const { favoritos } = useFavoritos();
  return (
    <div className="container-pagina">
      <h2>Meus Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>Você ainda não favoritou nenhum item.</p>
      ) : (
        <div className="lista-card">
          {favoritos.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginaFavoritos;