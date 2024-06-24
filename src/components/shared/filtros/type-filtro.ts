import { Atributo } from "app/services/typos";

function getObjects() {
    const result = [];
    const valores = filtrosType.valores;
    const atributos = filtrosType.atributos;

    for (let index = 0; index < filtrosType.atributos.length; index++) {
        const element = {
            type: valores[index],
            nombre: atributos[index]
        }
        result.push(element);
    }

    return result;
}

const filtrosType = {
    atributos: Object.keys(Atributo),
    valores: Object.values(Atributo),
    getObjects: getObjects
}

export const filtros = filtrosType.getObjects();