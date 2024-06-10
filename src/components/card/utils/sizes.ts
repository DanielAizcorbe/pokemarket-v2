export type sizeType = "lg" | "md" | "sm";

const smSize = {
    heightContainer: "h-60",
    widthContainer: "w-36",
    zoom: "130px 130px",
    fontSize: "text-sm",
    fontSizeImportant: "text-base",
}

const mdSize = {
    heightContainer: "h-72",
    widthContainer: "w-52",
    zoom: "150px 150px",
    fontSize: "text-base",
    fontSizeImportant: "text-lg",
}

const lgSize = {
    zoom: "170px 170px",
    heightContainer: "h-80",
    widthContainer: "w-60",
    fontSize: "text-lg",
    fontSizeImportant: "text-2xl",
}

export { lgSize, mdSize, smSize}