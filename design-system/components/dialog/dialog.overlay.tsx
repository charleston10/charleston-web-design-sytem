import * as React from "react";

import { useTheme } from "../../theme";
import { useDialogContext } from "./dialog.context";

import type { DialogOverlayProps } from "./dialog.types";

export function DialogOverlay<T extends React.ElementType = "div">({
    as,
    style,
    onClick,
    ...props
}: DialogOverlayProps<T>) {
    const theme = useTheme();
    const { open, setOpen, closeOnOverlayClick } = useDialogContext();
    const Component = (as ?? "div") as React.ElementType;

    function handleClick(event: React.MouseEvent<Element>) {
        onClick?.(event as never);

        if (event.defaultPrevented || !closeOnOverlayClick) {
            return;
        }

        if (event.target !== event.currentTarget) {
            return;
        }

        setOpen(false);
    }

    if (!open) {
        return null;
    }

    return (
        <Component
            {...props}
            aria-hidden
            onClick={handleClick}
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: theme.colors.background.overlay,
                zIndex: theme.zIndex.overlay,
                ...style,
            }}
        />
    );
}
