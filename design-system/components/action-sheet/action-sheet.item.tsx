import * as React from "react";

import { useTheme } from "../../theme";

import { useActionSheetContext } from "./action-sheet.context";
import type { ActionSheetItemProps } from "./action-sheet.types";

export function ActionSheetItem<T extends React.ElementType = "button">({
    as,
    children,
    destructive = false,
    disabled = false,
    onSelect,
    style,
    ...props
}: ActionSheetItemProps<T>) {
    const theme = useTheme();
    const { setOpen } = useActionSheetContext();

    const Component = (as ?? "button") as React.ElementType;
    const isNativeButton = Component === "button";

    function handleClick(event: React.MouseEvent<Element>) {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        onSelect?.(event);

        if (!event.defaultPrevented) {
            setOpen(false);
        }
    }

    return (
        <Component
            {...props}
            onClick={handleClick}
            disabled={isNativeButton ? disabled : undefined}
            aria-disabled={disabled}
            style={{
                appearance: "none",
                width: "100%",
                border: "none",
                borderTop: `1px solid ${theme.colors.border.subtle}`,
                backgroundColor: theme.colors.surface.default,
                color: destructive ? theme.colors.text.negative : theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: theme.typography.body.md.fontSize,
                lineHeight: `${theme.typography.body.md.lineHeight}px`,
                textAlign: "center",
                padding: theme.spacing.md,
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? theme.opacity.disabled : 1,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
