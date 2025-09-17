import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Interfaces } from '../components/Tipos.tsx';

interface InterfaceFavoritos{
    favoritos: Interfaces;
    adicionarFavorito: (card: Interfaces) => void;
    removerFavorito: (id:string) => void;
    eFavorito: (id:string) => boolean;
}

const favoritosContexto = createContext<InterfaceFavoritos | undefined>(undefined);

