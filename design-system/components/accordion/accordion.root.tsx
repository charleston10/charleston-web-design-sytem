import * as React from "react";

import { useTheme } from "../../theme";

import { AccordionRootContext } from "./accordion.context";
import type { AccordionRootProps } from "./accordion.types";

function normalizeValue(type: "single" | "multiple", value: string | string[] | undefined): string[] {
    if (typeof value === "undefined") {
        return [];
    }

    if (Array.isArray(value)) {
        return type === "single" ? value.slice(0, 1) : value;
    }

    return [value];
}

export function AccordionRoot<T extends React.ElementType = "div">({
    as,
    children,
    type = "single",
    value,
    defaultValue,
    onValueChange,
    style,
    ...props
}: AccordionRootProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    const isControlled = typeof value !== "undefined";
    const [internalValue, setInternalValue] = React.useState<string[]>(() => normalizeValue(type, defaultValue));
    const openValues = isControlled ? normalizeValue(type, value) : internalValue;

    function emitNext(nextValues: string[]) {
        if (!isControlled) {
            setInternalValue(nextValues);
        }

        onValueChange?.(type === "single" ? (nextValues[0] ?? "") : nextValues);
    }

    function isItemOpen(itemValue: string) {
        return openValues.includes(itemValue);
    }

    function toggleItem(itemValue: string) {
        if (type === "single") {
            const nextValues = isItemOpen(itemValue) ? [] : [itemValue];
            emitNext(nextValues);
            return;
        }

        const nextValues = isItemOpen(itemValue)
            ? openValues.filter((valueItem) => valueItem !== itemValue)
            : [...openValues, itemValue];

        emitNext(nextValues);
    }

    return (
        <AccordionRootContext.Provider value={{ type, isItemOpen, toggleItem }}>
            <Component
                {...props}
                style={{
                    border: `1px solid ${theme.colors.border.default}`,
                    borderRadius: theme.radius.md,
                    overflow: "hidden",
                    backgroundColor: theme.colors.surface.default,
                    ...style,
                }}
            >
                {children}
            </Component>
        </AccordionRootContext.Provider>
    );
}
