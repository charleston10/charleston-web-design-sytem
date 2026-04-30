import * as React from "react";

import { useTheme } from "../../theme";

import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

type ButtonStyles = {
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    color: string;
};

const sizeMap: Record<ButtonSize, { fontSize: number; lineHeight: number; minHeight: number; paddingX: number }> = {
    sm: { fontSize: 14, lineHeight: 18, minHeight: 32, paddingX: 12 },
    md: { fontSize: 16, lineHeight: 20, minHeight: 40, paddingX: 16 },
    lg: { fontSize: 18, lineHeight: 22, minHeight: 48, paddingX: 20 },
};

function getButtonStyles(variant: ButtonVariant, isDisabled: boolean, theme: ReturnType<typeof useTheme>): ButtonStyles {
    if (isDisabled) {
        return {
            backgroundColor: theme.colors.surface.disabled,
            borderColor: theme.colors.border.disabled,
            borderWidth: 1,
            color: theme.colors.text.disabled,
        };
    }

    if (variant === "secondary") {
        return {
            backgroundColor: theme.colors.button.secondary,
            borderColor: theme.colors.button.secondary,
            borderWidth: 1,
            color: theme.colors.text.inverse,
        };
    }

    if (variant === "outline") {
        return {
            backgroundColor: theme.colors.background.transparent,
            borderColor: theme.colors.border.strong,
            borderWidth: 1,
            color: theme.colors.text.primary,
        };
    }

    if (variant === "ghost") {
        return {
            backgroundColor: theme.colors.background.transparent,
            borderColor: theme.colors.background.transparent,
            borderWidth: 1,
            color: theme.colors.text.link,
        };
    }

    if (variant === "destructive") {
        return {
            backgroundColor: theme.colors.button.destructive,
            borderColor: theme.colors.button.destructive,
            borderWidth: 1,
            color: theme.colors.text.inverse,
        };
    }

    return {
        backgroundColor: theme.colors.button.primary,
        borderColor: theme.colors.button.primary,
        borderWidth: 1,
        color: theme.colors.text.inverse,
    };
}

export function ButtonRoot<T extends React.ElementType = "button">({
    as,
    children,
    variant = "primary",
    size = "md",
    radius = "sm",
    loading = false,
    fullWidth = false,
    disabled = false,
    style,
    ...props
}: ButtonProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "button") as React.ElementType;

    const isDisabled = disabled || loading;
    const sizeStyle = sizeMap[size];
    const buttonStyle = getButtonStyles(variant, isDisabled, theme);

    return (
        <Component
            {...props}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            style={{
                appearance: "none",
                borderStyle: "solid",
                borderWidth: buttonStyle.borderWidth,
                borderColor: buttonStyle.borderColor,
                borderRadius: theme.radius[radius],
                backgroundColor: buttonStyle.backgroundColor,
                color: buttonStyle.color,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: sizeStyle.fontSize,
                lineHeight: `${sizeStyle.lineHeight}px`,
                minHeight: sizeStyle.minHeight,
                paddingInline: sizeStyle.paddingX,
                paddingBlock: theme.spacing.xs,
                width: fullWidth ? "100%" : "auto",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: theme.spacing.xs,
                cursor: isDisabled ? "not-allowed" : "pointer",
                opacity: isDisabled ? theme.opacity.disabled : 1,
                transition: `all ${theme.motion.fast}ms ${theme.motion.easing.standard}`,
                ...style,
            }}
        >
            {loading ? "Loading..." : children}
        </Component>
    );
}
