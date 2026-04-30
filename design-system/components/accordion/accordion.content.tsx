import * as React from "react";

import { useTheme } from "../../theme";

import { useAccordionItemContext, useAccordionRootContext } from "./accordion.context";
import type { AccordionContentProps } from "./accordion.types";

export function AccordionContent<T extends React.ElementType = "div">({
    as,
    children,
    style,
    ...props
}: AccordionContentProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { value, triggerId, contentId } = useAccordionItemContext();
    const { isItemOpen } = useAccordionRootContext();

    const isOpen = isItemOpen(value);

    return (
        <Component
            {...props}
            id={contentId}
            role="region"
            aria-labelledby={triggerId}
            data-state={isOpen ? "open" : "closed"}
            hidden={!isOpen}
            style={{
                paddingInline: theme.spacing.md,
                paddingBottom: theme.spacing.md,
                fontFamily: theme.typography.fontFamily.regular,
                fontSize: theme.typography.body.md.fontSize,
                lineHeight: `${theme.typography.body.md.lineHeight}px`,
                color: theme.colors.text.secondary,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
