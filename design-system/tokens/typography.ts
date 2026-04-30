export const fontSizes = {
    caption: 12,
    label: 14,
    body: 16,
    subtitle: 18,
    title: 22,
    heading: 28,
} as const;

export const lineHeights = {
    caption: 16,
    label: 20,
    body: 24,
    subtitle: 26,
    title: 30,
    heading: 36,
} as const;

export const fontWeights = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
} as const;

export type FontSizeToken = keyof typeof fontSizes;
export type FontWeightToken = keyof typeof fontWeights;
