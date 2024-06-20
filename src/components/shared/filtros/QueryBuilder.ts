export class QueryBuilder {
    private primerAtributo: string;
    private segundoAtributo: string;

    constructor(primero?: string, segundo?: string) {
        this.primerAtributo = primero || "";
        this.segundoAtributo = segundo || "";
    }

    private setPrimerAtributo(atributo: string) {
        this.primerAtributo = atributo
    }

    private setSegundoAtributo(atributo: string) {
        this.segundoAtributo = atributo;
    }

    remove(atributo: string) {
        if(atributo === this.primerAtributo) {
            this.setPrimerAtributo(this.segundoAtributo);
            this.setSegundoAtributo("");       
        }

        if(atributo === this.segundoAtributo) {
            this.setSegundoAtributo("");
        }
    }

    add(atributo: string) {
        if(!this.primerAtributo) {
            this.setPrimerAtributo(atributo)
        }

        if(!this.segundoAtributo) {
            this.setSegundoAtributo(atributo);
        }

        if(this.primerAtributo === this.segundoAtributo) {
            this.setSegundoAtributo("");
        }
    }

    exist(atributo: string) {
        return this.primerAtributo === atributo || this.segundoAtributo === atributo;
    }

    build() {
        if(!this.primerAtributo) {
            console.log("vacio");
            
            return {}
        }

        if(!this.segundoAtributo) {
            console.log("un atributo");
            
            return {atributo1: this.primerAtributo}
        }
        console.log("dos atributos");
        
        return {
            atributo1: this.primerAtributo,
            atributo2: this.segundoAtributo
        }
    }
}