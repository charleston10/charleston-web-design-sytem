import * as React from "react";

import { useTheme } from "../../theme";
import { useToolbarContext } from "./toolbar.context";

import type { ToolbarActionsProps } from "./toolbar.types";

export function ToolbarActions<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: ToolbarActionsProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { orientation } = useToolbarContext("Toolbar.Actions");

    return (
        <Component
            {...props}
            style={{
                display: "flex",
                flexDirection: orientation === "horizontal" ? "row" : "column",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: theme.spacing.xs,
                flexShrink: 0,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
