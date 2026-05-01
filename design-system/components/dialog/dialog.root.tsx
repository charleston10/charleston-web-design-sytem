import * as React from "react";

import { DialogContext } from "./dialog.context";
import type { DialogRootProps } from "./dialog.types";

export function DialogRoot<T extends React.ElementType = "div">({
    as,
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    closeOnOverlayClick = true,
    ...props
}: DialogRootProps<T>) {
    const Component = (as ?? "div") as React.ElementType;
    const contentId = React.useId();
    const titleId = React.useId();
    const descriptionId = React.useId();
    const triggerRef = React.useRef<HTMLElement | null>(null);
    const contentRef = React.useRef<HTMLElement | null>(null);
    const [hasTitle, setHasTitle] = React.useState(false);
    const [hasDescription, setHasDescription] = React.useState(false);

    const isControlled = typeof open !== "undefined";
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const resolvedOpen = isControlled ? open : internalOpen;

    const setOpen = React.useCallback(
        (nextOpen: boolean) => {
            if (!isControlled) {
                setInternalOpen(nextOpen);
            }

            onOpenChange?.(nextOpen);
        },
        [isControlled, onOpenChange],
    );

    React.useEffect(() => {
        if (resolvedOpen) {
            const activeElement = document.activeElement as HTMLElement | null;

            if (activeElement && contentRef.current && !contentRef.current.contains(activeElement)) {
                contentRef.current.focus();
            }

            return;
        }

        triggerRef.current?.focus();
    }, [resolvedOpen]);

    const contextValue = React.useMemo(
        () => ({
            open: resolvedOpen,
            setOpen,
            closeOnOverlayClick,
            triggerRef,
            contentRef,
            contentId,
            titleId,
            descriptionId,
            hasTitle,
            hasDescription,
            setHasTitle,
            setHasDescription,
        }),
        [closeOnOverlayClick, contentId, descriptionId, hasDescription, hasTitle, resolvedOpen, setOpen, titleId],
    );

    return (
        <DialogContext.Provider value={contextValue}>
            <Component {...props}>{children}</Component>
        </DialogContext.Provider>
    );
}
