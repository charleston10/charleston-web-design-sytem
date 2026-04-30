import * as React from "react";

import type { Theme } from "../../theme";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";
type ButtonRadius = keyof Theme["radius"];

export type ButtonProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: ButtonRadius;
    loading?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "disabled" | "style">;

export type { ButtonRadius, ButtonSize, ButtonVariant };
