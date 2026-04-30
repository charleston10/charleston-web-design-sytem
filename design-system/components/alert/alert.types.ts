import * as React from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertRootProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    variant?: AlertVariant;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type AlertTitleProps<T extends React.ElementType = "h4"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type AlertDescriptionProps<T extends React.ElementType = "p"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type { AlertVariant };
