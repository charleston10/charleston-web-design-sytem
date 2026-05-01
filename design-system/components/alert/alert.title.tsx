import * as React from "react";

import { useTheme } from "../../theme";

import { AlertContext } from "./alert.root";
import type { AlertTitleProps } from "./alert.types";

export function AlertTitle<T extends React.ElementType = "h4">({
    as,
    children,
    style,
    ...props
}: AlertTitleProps<T>) {
    const theme = useTheme();
    const context = React.useContext(AlertContext);
    const Component = (as ?? "h4") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                margin: 0,
                color: context?.titleColor ?? theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.semibold,
                fontWeight: theme.fontWeight.semibold,
                fontSize: theme.typography.label.md.fontSize,
                lineHeight: `${theme.typography.label.md.lineHeight}px`,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
