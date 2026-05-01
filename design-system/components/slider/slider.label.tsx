import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderLabelProps } from "./slider.types";

export function SliderLabel<T extends React.ElementType = "label">({ as, children, style, ...props }: SliderLabelProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "label") as React.ElementType;
    const { inputId, labelId, disabled, required } = useSliderContext("Slider.Label");

    return (
        <Component
            {...props}
            id={labelId}
            htmlFor={Component === "label" ? inputId : undefined}
            data-disabled={disabled ? "true" : undefined}
            style={{
                margin: 0,
                color: disabled ? theme.colors.text.disabled : theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: theme.typography.label.sm.fontSize,
                lineHeight: `${theme.typography.label.sm.lineHeight}px`,
                ...style,
            }}
        >
            {children}
            {required ? " *" : null}
        </Component>
    );
}
