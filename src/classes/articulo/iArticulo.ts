export interface iArticulo {
    descripcion(): string;
    defaultSprite(): string;
    precioEstimado(): number;
    getImagenes(): Array<string>;
    getId(): string;
}   