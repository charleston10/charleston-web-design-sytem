import * as React from "react";

export type ActionSheetRootProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnOverlayClick?: boolean;
    style?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type ActionSheetTitleProps<T extends React.ElementType = "h2"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type ActionSheetDescriptionProps<T extends React.ElementType = "p"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type ActionSheetItemProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    destructive?: boolean;
    disabled?: boolean;
    onSelect?: (event: React.MouseEvent<Element>) => void;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "disabled" | "style">;

export type ActionSheetCancelProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "disabled" | "style">;
