export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    overlay: 50,
    modal: 100,
    toast: 200,
} as const;

export type ZIndexToken = keyof typeof zIndex;
