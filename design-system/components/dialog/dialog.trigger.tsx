import * as React from "react";

import { useTheme } from "../../theme";

import { useDialogContext } from "./dialog.context";
import type { DialogTriggerProps } from "./dialog.types";

export function DialogTrigger<T extends React.ElementType = "button">({
    as,
    children,
    disabled = false,
    style,
    onClick,
    ...props
}: DialogTriggerProps<T>) {
    const theme = useTheme();
    const { open, setOpen, triggerRef, contentId } = useDialogContext();
    const Component = (as ?? "button") as React.ElementType;

    function handleClick(event: React.MouseEvent<Element>) {
        onClick?.(event as never);

        if (event.defaultPrevented || disabled) {
            return;
        }

        setOpen(true);
    }

    return (
        <Component
            {...props}
            ref={triggerRef}
            type={as ? undefined : "button"}
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={contentId}
            data-state={open ? "open" : "closed"}
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
