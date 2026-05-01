import * as React from "react";

type DialogContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    closeOnOverlayClick: boolean;
    triggerRef: React.RefObject<HTMLElement | null>;
    contentRef: React.RefObject<HTMLElement | null>;
    contentId: string;
    titleId: string;
    descriptionId: string;
    hasTitle: boolean;
    hasDescription: boolean;
    setHasTitle: (hasTitle: boolean) => void;
    setHasDescription: (hasDescription: boolean) => void;
};

export const DialogContext = React.createContext<DialogContextValue | null>(null);

export function useDialogContext() {
    const context = React.useContext(DialogContext);

    if (!context) {
        throw new Error("Dialog components must be used within Dialog.Root");
    }

    return context;
}
