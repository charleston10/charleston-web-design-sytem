import * as React from "react";

import { useTheme } from "../../theme";

import { AlertContext } from "./alert.root";
import type { AlertDescriptionProps } from "./alert.types";

export function AlertDescription<T extends React.ElementType = "p">({
    as,
    children,
    style,
    ...props
}: AlertDescriptionProps<T>) {
    const theme = useTheme();
    const context = React.useContext(AlertContext);
    const Component = (as ?? "p") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                margin: 0,
                color: context?.descriptionColor ?? theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.regular,
                fontWeight: theme.fontWeight.regular,
                fontSize: theme.typography.body.sm.fontSize,
                lineHeight: `${theme.typography.body.sm.lineHeight}px`,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
