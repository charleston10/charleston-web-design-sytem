import * as React from "react";

export type AccordionType = "single" | "multiple";

export type AccordionRootProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    type?: AccordionType;
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type AccordionItemProps<T extends React.ElementType = "div"> = {
    as?: T;
    value: string;
    children?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type AccordionTriggerProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type AccordionContentProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;
