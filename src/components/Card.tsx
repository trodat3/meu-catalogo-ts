import React from 'react';
import type { Interfaces, InterfaceAnimais, InterfacePessoas, InterfaceLivros } from './Tipos.tsx';
import { useFavoritos } from '../context/Favoritos.tsx';

interface PropsCard {
  item: Interfaces;
}

const Card: React.FC<PropsCard> = ({ item }) => {
  const { adicionarFavorito, removerFavorito, eFavorito } = useFavoritos();
  const ehItemFavorito = eFavorito(item.id);
  const alternarFavorito = () => {
    if (ehItemFavorito) {
      removerFavorito(item.id);
    } else {
      adicionarFavorito(item);
    }
  };
  const renderizarConteudoDoItem = () => {
    if ('especie' in item) {
      const animal = item as InterfaceAnimais;
      return (
        <>
          <img src={animal.imagem} alt={animal.nome} />
          <h3>{animal.nome}</h3>
          <p>Espécie: {animal.especie}</p>
        </>
      );
    }
    if ('autor' in item) {
      const livro = item as InterfaceLivros;
      return (
        <>
          <img src={livro.capa} alt={livro.titulo} />
          <h3>{livro.titulo}</h3>
          <p>Autor: {livro.autor}</p>
          <p>Ano: {livro.ano}</p>
        </>
      );
    }
    if ('nascimento' in item) {
      const pessoa = item as InterfacePessoas;
      return (
        <>
          <img src={pessoa.foto} alt={pessoa.nome} />
          <h3>{pessoa.nome}</h3>
          <p>Área: {pessoa.area}</p>
          <p>Nascimento: {new Date(pessoa.nascimento).toLocaleDateString()}</p>
        </>
      );
    }
    return null;
  };

  return (
    <div className="card">
      {renderizarConteudoDoItem()}
      <button onClick={alternarFavorito} className="botao-favorito">
        {ehItemFavorito ? '❤️' : '♡'}
      </button>
    </div>
  );
};

export default Card;