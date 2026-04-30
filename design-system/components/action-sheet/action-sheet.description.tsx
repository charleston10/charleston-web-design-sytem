import * as React from "react";

import { useTheme } from "../../theme";

import type { ActionSheetDescriptionProps } from "./action-sheet.types";

export function ActionSheetDescription<T extends React.ElementType = "p">({
    as,
    children,
    style,
    ...props
}: ActionSheetDescriptionProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "p") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                margin: 0,
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.regular,
                fontWeight: theme.fontWeight.regular,
                fontSize: theme.typography.body.sm.fontSize,
                lineHeight: `${theme.typography.body.sm.lineHeight}px`,
                paddingInline: theme.spacing.md,
                paddingBottom: theme.spacing.sm,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
