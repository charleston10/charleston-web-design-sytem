import * as React from "react";

import { useTheme } from "../../theme";
import { ToolbarContext } from "./toolbar.context";

import type { ToolbarRootProps } from "./toolbar.types";

export function ToolbarRoot<T extends React.ElementType = "div">({
    as,
    children,
    orientation = "horizontal",
    position = "top",
    radius = "none",
    bordered = true,
    style,
    ...props
}: ToolbarRootProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    return (
        <ToolbarContext.Provider value={{ orientation }}>
            <Component
                {...props}
                role="toolbar"
                aria-orientation={orientation}
                data-orientation={orientation}
                data-position={position}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: theme.colors.background.elevated,
                    borderTop:
                        position === "bottom" && bordered
                            ? `1px solid ${theme.colors.border.subtle}`
                            : "none",
                    borderBottom:
                        position === "top" && bordered
                            ? `1px solid ${theme.colors.border.subtle}`
                            : "none",
                    paddingInline: theme.spacing.md,
                    paddingBlock: theme.spacing.sm,
                    borderRadius: theme.radius[radius],
                    minHeight: 56,
                    gap: theme.spacing.sm,
                    ...style,
                }}
            >
                {children}
            </Component>
        </ToolbarContext.Provider>
    );
}
