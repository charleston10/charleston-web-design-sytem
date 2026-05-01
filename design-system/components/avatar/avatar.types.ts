import * as React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "rounded" | "square";

export type AvatarRootProps = {
    size?: AvatarSize;
    shape?: AvatarShape;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">;

export type AvatarContentProps = {
    src?: string;
    alt?: string;
    name?: string;
    fallback?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "style">;
