import * as React from "react";

import type { AccordionType } from "./accordion.types";

type AccordionRootContextValue = {
    type: AccordionType;
    isItemOpen: (value: string) => boolean;
    toggleItem: (value: string) => void;
};

type AccordionItemContextValue = {
    value: string;
    triggerId: string;
    contentId: string;
    disabled: boolean;
};

export const AccordionRootContext = React.createContext<AccordionRootContextValue | null>(null);
export const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);

export function useAccordionRootContext() {
    const context = React.useContext(AccordionRootContext);

    if (!context) {
        throw new Error("Accordion components must be used inside Accordion.Root.");
    }

    return context;
}

export function useAccordionItemContext() {
    const context = React.useContext(AccordionItemContext);

    if (!context) {
        throw new Error("Accordion.Trigger and Accordion.Content must be used inside Accordion.Item.");
    }

    return context;
}
