import * as React from "react";

import { useTheme } from "../../theme";

import type { AlertRootProps, AlertVariant } from "./alert.types";

type AlertStyle = {
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    descriptionColor: string;
};

const alertStyleByVariant: Record<AlertVariant, (theme: ReturnType<typeof useTheme>) => AlertStyle> = {
    info: (theme) => ({
        backgroundColor: theme.colors.primary[50],
        borderColor: theme.colors.feedback.info,
        titleColor: theme.colors.text.primary,
        descriptionColor: theme.colors.text.secondary,
    }),
    success: (theme) => ({
        backgroundColor: theme.colors.surface.default,
        borderColor: theme.colors.feedback.success,
        titleColor: theme.colors.text.primary,
        descriptionColor: theme.colors.text.secondary,
    }),
    warning: (theme) => ({
        backgroundColor: theme.colors.surface.default,
        borderColor: theme.colors.feedback.warning,
        titleColor: theme.colors.text.primary,
        descriptionColor: theme.colors.text.secondary,
    }),
    error: (theme) => ({
        backgroundColor: theme.colors.surface.default,
        borderColor: theme.colors.feedback.error,
        titleColor: theme.colors.text.primary,
        descriptionColor: theme.colors.text.secondary,
    }),
};

export const AlertContext = React.createContext<AlertStyle | null>(null);

export function AlertRoot<T extends React.ElementType = "div">({
    as,
    children,
    variant = "info",
    style,
    ...props
}: AlertRootProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const alertStyle = alertStyleByVariant[variant](theme);

    return (
        <AlertContext.Provider value={alertStyle}>
            <Component
                {...props}
                role="alert"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing.xs,
                    width: "100%",
                    borderRadius: theme.radius.md,
                    borderLeft: `4px solid ${alertStyle.borderColor}`,
                    borderTop: `1px solid ${theme.colors.border.default}`,
                    borderRight: `1px solid ${theme.colors.border.default}`,
                    borderBottom: `1px solid ${theme.colors.border.default}`,
                    backgroundColor: alertStyle.backgroundColor,
                    padding: theme.spacing.md,
                    ...style,
                }}
            >
                {children}
            </Component>
        </AlertContext.Provider>
    );
}
