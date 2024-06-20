import { Tag } from "../pokemon/Tags";

export interface iArticulo {
    descripcion(): string;
    defaultSprite(): string;
    precioEstimado(): number;
    getImagenes(): Array<string>;
    getId(): string;
    getGameDescription(): string;
    getTags(): string[];
}   