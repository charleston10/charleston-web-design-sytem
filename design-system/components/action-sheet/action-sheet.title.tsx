import * as React from "react";

import { useTheme } from "../../theme";

import type { ActionSheetTitleProps } from "./action-sheet.types";

export function ActionSheetTitle<T extends React.ElementType = "h2">({ as, children, style, ...props }: ActionSheetTitleProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "h2") as React.ElementType;

    return (
        <Component
            {...props}
            style={{
                margin: 0,
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.semibold,
                fontSize: theme.typography.subtitle.md.fontSize,
                lineHeight: `${theme.typography.subtitle.md.lineHeight}px`,
                paddingInline: theme.spacing.md,
                paddingTop: theme.spacing.md,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
