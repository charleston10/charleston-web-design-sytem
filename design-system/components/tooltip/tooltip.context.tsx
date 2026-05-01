import * as React from "react";

import type { TooltipSide } from "./tooltip.types";

type TooltipContextValue = {
    contentId: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    openDelay: number;
    closeDelay: number;
    side: TooltipSide;
    triggerRef: React.RefObject<HTMLElement | null>;
};

export const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export function useTooltipContext() {
    const context = React.useContext(TooltipContext);

    if (!context) {
        throw new Error("Tooltip components must be used within Tooltip.Root");
    }

    return context;
}
