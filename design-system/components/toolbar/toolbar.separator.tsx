import * as React from "react";

import { useTheme } from "../../theme";
import { useToolbarContext } from "./toolbar.context";

import type { ToolbarSeparatorProps } from "./toolbar.types";

export function ToolbarSeparator<T extends React.ElementType = "div">({
    as,
    style,
    ...props
}: ToolbarSeparatorProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { orientation } = useToolbarContext("Toolbar.Separator");

    return (
        <Component
            {...props}
            role="separator"
            aria-orientation={orientation === "horizontal" ? "vertical" : "horizontal"}
            style={{
                alignSelf: "stretch",
                backgroundColor: theme.colors.border.subtle,
                width: orientation === "horizontal" ? 1 : "100%",
                height: orientation === "horizontal" ? "auto" : 1,
                ...style,
            }}
        />
    );
}
