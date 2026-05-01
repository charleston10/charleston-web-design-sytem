import * as React from "react";

import { useTheme } from "../../theme";

import { useDialogContext } from "./dialog.context";
import type { DialogContentProps } from "./dialog.types";

function getFocusableElements(container: HTMLElement) {
    return Array.from(
        container.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
    ).filter((element) => !element.hasAttribute("aria-hidden"));
}

export function DialogContent<T extends React.ElementType = "div">({
    as,
    children,
    style,
    onKeyDown,
    ...props
}: DialogContentProps<T>) {
    const theme = useTheme();
    const { open, setOpen, contentRef, contentId, titleId, descriptionId, hasTitle, hasDescription } = useDialogContext();
    const Component = (as ?? "div") as React.ElementType;

    function handleKeyDown(event: React.KeyboardEvent<Element>) {
        onKeyDown?.(event as never);

        if (event.defaultPrevented) {
            return;
        }

        if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
            return;
        }

        if (event.key !== "Tab" || !contentRef.current) {
            return;
        }

        const focusableElements = getFocusableElements(contentRef.current);

        if (focusableElements.length === 0) {
            event.preventDefault();
            contentRef.current.focus();
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement | null;

        if (event.shiftKey && activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
        }

        if (!event.shiftKey && activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    if (!open) {
        return null;
    }

    const shadow = theme.shadow.lg;

    return (
        <Component
            {...props}
            id={contentId}
            ref={contentRef}
            role="dialog"
            aria-modal={true}
            aria-labelledby={hasTitle ? titleId : undefined}
            aria-describedby={hasDescription ? descriptionId : undefined}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(560px, calc(100vw - 32px))",
                maxHeight: "calc(100vh - 32px)",
                overflow: "auto",
                zIndex: theme.zIndex.modal,
                borderRadius: theme.radius.lg,
                border: `1px solid ${theme.colors.border.default}`,
                backgroundColor: theme.colors.surface.default,
                color: theme.colors.text.primary,
                boxShadow: `${shadow.offset.width}px ${shadow.offset.height}px ${shadow.radius}px rgba(0, 0, 0, ${shadow.opacity})`,
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing.md,
                padding: theme.spacing.lg,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
