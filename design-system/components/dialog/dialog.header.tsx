import * as React from "react";

import { useTheme } from "../../theme";
import type { DialogHeaderProps } from "./dialog.types";

export function DialogHeader<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: DialogHeaderProps<T>) {
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
