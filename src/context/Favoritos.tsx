import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Interfaces } from '../components/Tipos.tsx';

interface InterfaceFavoritos{
    favoritos: Interfaces[];
    adicionarFavorito: (card: Interfaces) => void;
    removerFavorito: (id:string) => void;
    eFavorito: (id:string) => boolean;
}

const favoritosContexto = createContext<InterfaceFavoritos | undefined>(undefined);

export const ProvedorDeFavoritos: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favoritos, setFavoritos] = useState<Interfaces[]>([]);

    const adicionarFavorito = (item: Interfaces) => {
        setFavoritos((favoritosAnteriores) => [...favoritosAnteriores, item]);
    };

    const removerFavorito = (id: string) => {
        setFavoritos((favoritosAnteriores) => favoritosAnteriores.filter((item) => item.id !== id));
    };

    const eFavorito = (id: string): boolean => {
        return favoritos.some((item) => item.id === id);
    };

    return (
        <favoritosContexto.Provider value={{ favoritos, adicionarFavorito, removerFavorito, eFavorito }}>
            {children}
        </favoritosContexto.Provider>
    );
};

export const useFavoritos = () => {
    const contexto = useContext(favoritosContexto);
    if (!contexto) {
        throw new Error('useFavoritos deve ser usado dentro de um ProvedorDeFavoritos');
    }
    return contexto;
};
