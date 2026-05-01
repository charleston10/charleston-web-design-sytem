import * as React from "react";

import { useTheme } from "../../theme";

import { useDialogContext } from "./dialog.context";
import type { DialogCloseProps } from "./dialog.types";

export function DialogClose<T extends React.ElementType = "button">({
    as,
    children,
    disabled = false,
    style,
    onClick,
    ...props
}: DialogCloseProps<T>) {
    const theme = useTheme();
    const { setOpen } = useDialogContext();
    const Component = (as ?? "button") as React.ElementType;

    function handleClick(event: React.MouseEvent<Element>) {
        onClick?.(event as never);

        if (event.defaultPrevented || disabled) {
            return;
        }

        setOpen(false);
    }

    return (
        <Component
            {...props}
            type={as ? undefined : "button"}
            disabled={disabled}
            onClick={handleClick}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? theme.opacity.disabled : undefined,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
