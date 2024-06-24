import { Atributo } from "app/services/typos";

export class Pokemon {
    private id: string;
    private nombre: string;
    private spriteBackDefault: string;
    private spriteFrontDefault: string;
    private spriteBackShiny: string;
    private spriteFrontShiny: string;
    private minLevelExistencia: number;
    private gameDescription: string;
    private atributos: Atributo[]

    constructor(id: string,
        nombre: string,
        spriteBackDefault: string,
        spriteFrontDefault: string,
        spriteBackShiny: string,
        spriteFrontShiny: string,
        minLevelExistencia: number,
        gameDescription: string,
        atributos: Atributo[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.spriteBackDefault = spriteBackDefault;
        this.spriteBackShiny = spriteBackShiny;
        this.spriteFrontDefault = spriteFrontDefault;
        this.spriteFrontShiny = spriteFrontShiny;
        this.minLevelExistencia = minLevelExistencia;
        this.gameDescription = gameDescription;
        this.atributos = atributos;
    }

    getImage(shiny: boolean): string {
        return shiny ? this.spriteFrontShiny : this.spriteFrontDefault;
    }

    imagenes(shiny: boolean): string[] {
        const imagenesShiny = [this.spriteFrontShiny, this.spriteBackShiny];
        const imagenesDefault = [this.spriteFrontDefault, this.spriteBackDefault];
        return shiny ? imagenesShiny : imagenesDefault;
    }

    getGameDescription(): string {
        return this.gameDescription;
    }

    getNombre():string {
        return this.nombre;
    }

    getAtributos(): Atributo[] {
        return this.atributos;
    }
    
    getMinLevel(): number {
        return this.minLevelExistencia;
    }

    getId(): string {
        return this.id;
    }
}



