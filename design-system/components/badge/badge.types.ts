import * as React from "react";

import type { Theme } from "../../theme";

type BadgeVariant = "neutral" | "info" | "success" | "warning" | "error";
type BadgeSize = "sm" | "md";
type BadgeRadius = keyof Theme["radius"];

export type BadgeProps<T extends React.ElementType = "span"> = {
    as?: T;
    children?: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    radius?: BadgeRadius;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type { BadgeRadius, BadgeSize, BadgeVariant };
