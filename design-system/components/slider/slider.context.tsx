import * as React from "react";

type SliderContextValue = {
    inputId: string;
    labelId: string;
    descriptionId: string;
    messageId: string;
    name?: string;
    value: number;
    min: number;
    max: number;
    step: number;
    percentage: number;
    disabled: boolean;
    readOnly: boolean;
    invalid: boolean;
    required: boolean;
    ariaLabel: string;
    ariaValueText?: string;
    setValue: (value: number) => void;
    increment: () => void;
    decrement: () => void;
};

export const SliderContext = React.createContext<SliderContextValue | null>(null);

export function useSliderContext(componentName: string): SliderContextValue {
    const context = React.useContext(SliderContext);

    if (!context) {
        throw new Error(`${componentName} must be used inside Slider.Root.`);
    }

    return context;
}
