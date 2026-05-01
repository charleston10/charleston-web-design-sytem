import * as React from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export type TooltipRootProps = {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelay?: number;
    closeDelay?: number;
    side?: TooltipSide;
};

export type TooltipTriggerProps<T extends React.ElementType = "button"> = {
    as?: T;
    children: React.ReactNode;
    disabled?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export type TooltipContentProps<T extends React.ElementType = "div"> = {
    as?: T;
    children: React.ReactNode;
    side?: TooltipSide;
    offset?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "id" | "role">;
