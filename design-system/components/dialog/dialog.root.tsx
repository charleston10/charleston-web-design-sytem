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
    const previousFocusedElementRef = React.useRef<HTMLElement | null>(null);
    const previousOpenRef = React.useRef<boolean>(false);
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
        if (typeof document === "undefined") {
            return;
        }

        const wasOpen = previousOpenRef.current;

        if (resolvedOpen && !wasOpen) {
            previousFocusedElementRef.current = document.activeElement as HTMLElement | null;
            const activeElement = document.activeElement as HTMLElement | null;

            if (
                activeElement &&
                contentRef.current &&
                !contentRef.current.contains(activeElement)
            ) {
                contentRef.current.focus();
            }
        }

        if (!resolvedOpen && wasOpen) {
            const previousFocusedElement = previousFocusedElementRef.current;

            if (
                previousFocusedElement &&
                previousFocusedElement.isConnected &&
                !previousFocusedElement.hasAttribute("disabled")
            ) {
                previousFocusedElement.focus();
            } else {
                triggerRef.current?.focus();
            }
        }

        previousOpenRef.current = resolvedOpen;
    }, [resolvedOpen]);

    React.useEffect(() => {
        if (typeof document === "undefined" || !resolvedOpen) {
            return;
        }

        const lockCountAttribute = "data-dialog-scroll-lock-count";
        const body = document.body;
        const currentCount = Number(body.getAttribute(lockCountAttribute) ?? "0");

        if (currentCount === 0) {
            body.setAttribute("data-dialog-scroll-lock-original-overflow", body.style.overflow);
            body.style.overflow = "hidden";
        }

        body.setAttribute(lockCountAttribute, String(currentCount + 1));

        return () => {
            const activeCount = Number(body.getAttribute(lockCountAttribute) ?? "0");
            const nextCount = Math.max(0, activeCount - 1);

            if (nextCount === 0) {
                const originalOverflow = body.getAttribute(
                    "data-dialog-scroll-lock-original-overflow",
                );
                body.style.overflow = originalOverflow ?? "";
                body.removeAttribute(lockCountAttribute);
                body.removeAttribute("data-dialog-scroll-lock-original-overflow");
                return;
            }

            body.setAttribute(lockCountAttribute, String(nextCount));
        };
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
        [
            closeOnOverlayClick,
            contentId,
            descriptionId,
            hasDescription,
            hasTitle,
            resolvedOpen,
            setOpen,
            titleId,
        ],
    );

    return (
        <DialogContext.Provider value={contextValue}>
            <Component data-dialog-root="" {...props}>
                {children}
            </Component>
        </DialogContext.Provider>
    );
}
