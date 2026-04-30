import * as React from "react";

import { useTheme } from "../../theme";

import type { AlertContentProps } from "./alert.types";

export function AlertContent<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: AlertContentProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing.xs,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
