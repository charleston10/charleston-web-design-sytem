import * as React from "react";

import { useTheme } from "../../theme";
import { useToolbarContext } from "./toolbar.context";

import type { ToolbarContentProps } from "./toolbar.types";

export function ToolbarContent<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: ToolbarContentProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { orientation } = useToolbarContext("Toolbar.Content");

    return (
        <Component
            {...props}
            style={{
                display: "flex",
                flexDirection: orientation === "horizontal" ? "row" : "column",
                alignItems: orientation === "horizontal" ? "center" : "stretch",
                justifyContent: "flex-start",
                gap: theme.spacing.sm,
                flex: 1,
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
