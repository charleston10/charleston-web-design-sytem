import * as React from "react";

type TooltipContextValue = {
    contentId: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    openDelay: number;
    closeDelay: number;
};

export const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export function useTooltipContext() {
    const context = React.useContext(TooltipContext);

    if (!context) {
        throw new Error("Tooltip components must be used within Tooltip.Root");
    }

    return context;
}
