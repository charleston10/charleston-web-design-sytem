import * as React from "react";

import { useTooltipContext } from "./tooltip.context";
import type { TooltipTriggerProps } from "./tooltip.types";

export function TooltipTrigger<T extends React.ElementType = "button">({
    as,
    children,
    disabled = false,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onKeyDown,
    ...props
}: TooltipTriggerProps<T>) {
    const Component = (as ?? "button") as React.ElementType;

    const { contentId, open, setOpen, openDelay, closeDelay } = useTooltipContext();

    const timerRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        return () => {
            if (timerRef.current) {
                window.clearTimeout(timerRef.current);
            }
        };
    }, []);

    function clearTimer() {
        if (!timerRef.current) {
            return;
        }

        window.clearTimeout(timerRef.current);
        timerRef.current = null;
    }

    function scheduleOpen() {
        if (disabled) {
            return;
        }

        clearTimer();
        timerRef.current = window.setTimeout(() => setOpen(true), openDelay);
    }

    function scheduleClose() {
        clearTimer();
        timerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }

    function handleKeyDown(event: React.KeyboardEvent) {
        onKeyDown?.(event as never);

        if (event.defaultPrevented || disabled) {
            return;
        }

        if (event.key === "Escape") {
            setOpen(false);
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(!open);
        }
    }

    return (
        <Component
            {...props}
            aria-describedby={open ? contentId : undefined}
            onMouseEnter={(event: React.MouseEvent) => {
                onMouseEnter?.(event as never);
                if (!event.defaultPrevented) {
                    scheduleOpen();
                }
            }}
            onMouseLeave={(event: React.MouseEvent) => {
                onMouseLeave?.(event as never);
                if (!event.defaultPrevented) {
                    scheduleClose();
                }
            }}
            onFocus={(event: React.FocusEvent) => {
                onFocus?.(event as never);
                if (!event.defaultPrevented) {
                    scheduleOpen();
                }
            }}
            onBlur={(event: React.FocusEvent) => {
                onBlur?.(event as never);
                if (!event.defaultPrevented) {
                    scheduleClose();
                }
            }}
            onKeyDown={handleKeyDown}
            onClick={(event: React.MouseEvent) => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }}
            disabled={Component === "button" ? disabled : undefined}
        >
            {children}
        </Component>
    );
}
