import * as React from "react";

import { TooltipContext } from "./tooltip.context";
import type { TooltipRootProps } from "./tooltip.types";

export function TooltipRoot({
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    openDelay = 120,
    closeDelay = 80,
}: TooltipRootProps) {
    const contentId = React.useId();
    const isControlled = typeof open !== "undefined";
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

    const resolvedOpen = isControlled ? open : internalOpen;

    function setOpen(nextOpen: boolean) {
        if (!isControlled) {
            setInternalOpen(nextOpen);
        }

        onOpenChange?.(nextOpen);
    }

    return (
        <TooltipContext.Provider
            value={{
                contentId,
                open: resolvedOpen,
                setOpen,
                openDelay,
                closeDelay,
            }}
        >
            {children}
        </TooltipContext.Provider>
    );
}
