import * as React from "react";

import { useTheme } from "../../theme";
import type { DialogFooterProps } from "./dialog.types";

export function DialogFooter<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: DialogFooterProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: theme.spacing.sm,
                marginTop: theme.spacing.sm,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
