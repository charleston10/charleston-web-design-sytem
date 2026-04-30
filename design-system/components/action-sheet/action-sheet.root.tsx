import * as React from "react";

import { useTheme } from "../../theme";

import { ActionSheetContext } from "./action-sheet.context";
import type { ActionSheetRootProps } from "./action-sheet.types";

export function ActionSheetRoot<T extends React.ElementType = "div">({
    as,
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    closeOnOverlayClick = true,
    style,
    overlayStyle,
    contentStyle,
    ...props
}: ActionSheetRootProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    const isControlled = typeof open !== "undefined";
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = isControlled ? open : internalOpen;

    function setOpen(nextOpen: boolean) {
        if (!isControlled) {
            setInternalOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
    }

    function handleOverlayClick() {
        if (!closeOnOverlayClick) {
            return;
        }

        setOpen(false);
    }

    if (!isOpen) {
        return null;
    }

    return (
        <ActionSheetContext.Provider value={{ open: isOpen, setOpen }}>
            <div
                aria-hidden
                onClick={handleOverlayClick}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: theme.colors.overlay.default,
                    zIndex: theme.zIndex.overlay,
                    ...overlayStyle,
                }}
            />
            <Component
                {...props}
                role="dialog"
                aria-modal
                style={{
                    position: "fixed",
                    left: theme.spacing.sm,
                    right: theme.spacing.sm,
                    bottom: theme.spacing.sm,
                    zIndex: theme.zIndex.modal,
                    borderRadius: theme.radius.lg,
                    border: `1px solid ${theme.colors.border.default}`,
                    backgroundColor: theme.colors.surface.default,
                    boxShadow: theme.shadows.lg,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing.xs,
                    ...contentStyle,
                    ...style,
                }}
            >
                {children}
            </Component>
        </ActionSheetContext.Provider>
    );
}
