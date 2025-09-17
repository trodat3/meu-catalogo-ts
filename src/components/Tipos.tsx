export interface InterfaceAnimais{
    id: string;
    nome: string;
    especie: string;
    imagem: string; 
}

export interface InterfaceLivros{
    id: string;
    titulo: string;
    autor: string;
    ano: number;
    capa: string;
}

export interface InterfacePessoas{
    id: string;
    nome: string;
    nascimento: string;
    area: string;
    foto: string;
}

export type Interfaces = InterfaceLivros | InterfaceAnimais | InterfacePessoas;