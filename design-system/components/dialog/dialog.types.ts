import * as React from "react";

export type DialogRootProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnOverlayClick?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export type DialogTriggerProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "disabled" | "style">;

export type DialogOverlayProps<T extends React.ElementType = "div"> = {
    as?: T;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "style">;

export type DialogContentProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type DialogHeaderProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type DialogFooterProps<T extends React.ElementType = "div"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type DialogTitleProps<T extends React.ElementType = "h2"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type DialogDescriptionProps<T extends React.ElementType = "p"> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type DialogCloseProps<T extends React.ElementType = "button"> = {
    as?: T;
    children?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "disabled" | "style">;
