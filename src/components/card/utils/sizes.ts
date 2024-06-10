export type sizeType = "lg" | "md" | "sm";
export type distributionType = "horizontal" | "vertical"

const smGeneralSize = {
    zoom: "130px 130px",
    fontSize: "text-sm",
    fontSizeImportant: "text-base",
}

const smVerticalSize = {
    heightContainer: "h-60",
    widthContainer: "w-36",
}

const smHorizontalSize = {
    heightContainer: "h-32",
    widthContainer: "w-72",
}

const mdGeneralSize = {
    zoom: "150px 150px",
    fontSize: "text-base",
    fontSizeImportant: "text-lg",
}

const mdVerticalSize = {
    heightContainer: "h-72",
    widthContainer: "w-52",
}

const mdHorizontalSize = {
    heightContainer: "h-40",
    widthContainer: "w-80",
}

const lgGeneralSize = {
    zoom: "170px 170px",
    fontSize: "text-lg",
    fontSizeImportant: "text-2xl",
}

const lgVerticalSize = {
    heightContainer: "h-80",
    widthContainer: "w-60",
}

const lgHorizontalSize = {
    heightContainer: "h-44",
    widthContainer: "w-96",
}

const sm = {
    generals: smGeneralSize,
    vertical: smVerticalSize,
    horizontal: smHorizontalSize
}

const md = {
    generals: mdGeneralSize,
    vertical: mdVerticalSize,
    horizontal: mdHorizontalSize
}

const lg = {
    generals: lgGeneralSize,
    vertical: lgVerticalSize,
    horizontal: lgHorizontalSize
}

export { sm, md, lg }