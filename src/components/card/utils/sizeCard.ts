import { distributionType, sizeType, sm, md, lg} from "./sizes";

export function getSizeCard(size: sizeType, distribution: distributionType ) {

    let sizeObject;

    switch (size) {
        case "sm": sizeObject = sm; break;
        case "md": sizeObject = md; break;
        case "lg": sizeObject = lg; break;
        default: throw new Error("size inválido");
    }

    const result = {...sizeObject.generals, ...sizeObject[distribution]};
    //console.log("result: ", result);

    return result
}
