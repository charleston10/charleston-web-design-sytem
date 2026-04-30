import * as React from "react";

import { useTheme } from "../../theme";

import { useAccordionItemContext, useAccordionRootContext } from "./accordion.context";
import type { AccordionTriggerProps } from "./accordion.types";

export function AccordionTrigger<T extends React.ElementType = "button">({
    as,
    children,
    style,
    ...props
}: AccordionTriggerProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "button") as React.ElementType;
    const { value, contentId, triggerId, disabled } = useAccordionItemContext();
    const { isItemOpen, toggleItem } = useAccordionRootContext();

    const isOpen = isItemOpen(value);

    return (
        <Component
            {...props}
            id={triggerId}
            type="button"
            disabled={disabled}
            aria-expanded={isOpen}
            aria-controls={contentId}
            onClick={() => toggleItem(value)}
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: theme.spacing.md,
                paddingBlock: theme.spacing.md,
                border: 0,
                backgroundColor: theme.colors.background.transparent,
                color: theme.colors.text.primary,
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? theme.opacity.disabled : 1,
                textAlign: "left",
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.bold,
                fontSize: theme.typography.body.md.fontSize,
                lineHeight: `${theme.typography.body.md.lineHeight}px`,
                ...style,
            }}
        >
            <span>{children}</span>
            <span
                aria-hidden
                style={{
                    display: "inline-flex",
                    transition: `transform ${theme.motion.fast}ms ${theme.motion.easing.standard}`,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
            >
                ▾
            </span>
        </Component>
    );
}
