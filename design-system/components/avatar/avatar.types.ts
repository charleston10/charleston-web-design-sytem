import * as React from "react";

import type { Theme } from "../../theme";

type AvatarSize = "sm" | "md" | "lg" | "xl";
type AvatarRadius = keyof Theme["radius"];

export type AvatarProps = {
    alt?: string;
    src?: string;
    name?: string;
    size?: AvatarSize;
    radius?: AvatarRadius;
    fallback?: React.ReactNode;
    style?: React.CSSProperties;
    imageStyle?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<"span">, "children" | "style">;

export type { AvatarRadius, AvatarSize };
