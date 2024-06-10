import { lgSize, mdSize, sizeType, smSize } from "./sizes";

export function getSizeCard(size: sizeType) {
    switch (size) {
        case "sm": return smSize;
        case "md": return mdSize;
        case "lg": return lgSize;
        default: throw new Error("size inválido");
    }
}