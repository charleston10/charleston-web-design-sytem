import * as React from "react";

import { useTheme } from "../../theme";

import { useActionSheetContext } from "./action-sheet.context";
import type { ActionSheetCancelProps } from "./action-sheet.types";

export function ActionSheetCancel<T extends React.ElementType = "button">({
    as,
    children = "Cancelar",
    disabled = false,
    style,
    ...props
}: ActionSheetCancelProps<T>) {
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

        if (typeof props.onClick === "function") {
            props.onClick(event as React.MouseEvent<any>);
        }

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
                borderTop: `1px solid ${theme.colors.border.default}`,
                backgroundColor: theme.colors.surface.default,
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.semibold,
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
