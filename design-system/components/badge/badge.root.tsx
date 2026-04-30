import * as React from "react";

import { useTheme } from "../../theme";

import type { BadgeProps, BadgeSize, BadgeVariant } from "./badge.types";

type BadgeStyle = {
    backgroundColor: string;
    color: string;
    borderColor: string;
};

const sizeMap: Record<BadgeSize, { minHeight: number; fontSize: number; lineHeight: number; paddingX: number }> = {
    sm: { minHeight: 20, fontSize: 12, lineHeight: 16, paddingX: 8 },
    md: { minHeight: 24, fontSize: 14, lineHeight: 18, paddingX: 10 },
};

function getBadgeStyle(variant: BadgeVariant, theme: ReturnType<typeof useTheme>): BadgeStyle {
    if (variant === "info") {
        return {
            backgroundColor: theme.colors.primary[100],
            color: theme.colors.primary[700],
            borderColor: theme.colors.primary[200],
        };
    }

    if (variant === "success") {
        return {
            backgroundColor: theme.colors.surface.hover,
            color: theme.colors.feedback.success,
            borderColor: theme.colors.border.default,
        };
    }

    if (variant === "warning") {
        return {
            backgroundColor: theme.colors.surface.hover,
            color: theme.colors.feedback.warning,
            borderColor: theme.colors.border.default,
        };
    }

    if (variant === "error") {
        return {
            backgroundColor: theme.colors.surface.hover,
            color: theme.colors.feedback.error,
            borderColor: theme.colors.border.default,
        };
    }

    return {
        backgroundColor: theme.colors.surface.muted,
        color: theme.colors.text.secondary,
        borderColor: theme.colors.border.default,
    };
}

export function BadgeRoot<T extends React.ElementType = "span">({
    as,
    children,
    variant = "neutral",
    size = "sm",
    radius = "pill",
    style,
    ...props
}: BadgeProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "span") as React.ElementType;
    const badgeStyle = getBadgeStyle(variant, theme);
    const sizeStyle = sizeMap[size];

    return (
        <Component
            {...props}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                minHeight: sizeStyle.minHeight,
                paddingInline: sizeStyle.paddingX,
                borderRadius: theme.radius[radius],
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: badgeStyle.borderColor,
                backgroundColor: badgeStyle.backgroundColor,
                color: badgeStyle.color,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: sizeStyle.fontSize,
                lineHeight: `${sizeStyle.lineHeight}px`,
                whiteSpace: "nowrap",
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
