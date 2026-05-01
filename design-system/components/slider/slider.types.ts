import * as React from "react";

import type { Theme } from "../../theme";

export type SliderSize = "sm" | "md" | "lg";
export type SliderRadius = keyof Theme["radius"];

type SliderSharedProps<T extends React.ElementType> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type SliderRootProps<T extends React.ElementType = "div"> = SliderSharedProps<T> & {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    readOnly?: boolean;
    invalid?: boolean;
    required?: boolean;
    name?: string;
    ariaLabel?: string;
    ariaValueText?: string;
    onValueChange?: (value: number) => void;
};

export type SliderContentProps<T extends React.ElementType = "div"> = SliderSharedProps<T> & {
    size?: SliderSize;
    radius?: SliderRadius;
};

export type SliderTrackProps<T extends React.ElementType = "div"> = SliderSharedProps<T>;

export type SliderRangeProps<T extends React.ElementType = "div"> = SliderSharedProps<T>;

export type SliderThumbProps<T extends React.ElementType = "div"> = SliderSharedProps<T>;

export type SliderLabelProps<T extends React.ElementType = "label"> = SliderSharedProps<T>;

export type SliderDescriptionProps<T extends React.ElementType = "p"> = SliderSharedProps<T>;

export type SliderMessageProps<T extends React.ElementType = "p"> = SliderSharedProps<T>;
