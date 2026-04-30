import * as React from "react";

import { useTheme } from "../../theme";

import { AccordionItemContext } from "./accordion.context";
import type { AccordionItemProps } from "./accordion.types";

export function AccordionItem<T extends React.ElementType = "div">({
    as,
    value,
    children,
    disabled = false,
    style,
    ...props
}: AccordionItemProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const idBase = React.useId();

    const triggerId = `${idBase}-trigger`;
    const contentId = `${idBase}-content`;

    return (
        <AccordionItemContext.Provider value={{ value, triggerId, contentId, disabled }}>
            <Component
                {...props}
                style={{
                    borderBottom: `1px solid ${theme.colors.border.default}`,
                    ...style,
                }}
            >
                {children}
            </Component>
        </AccordionItemContext.Provider>
    );
}
