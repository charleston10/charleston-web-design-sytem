import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderRangeProps } from "./slider.types";

export function SliderRange<T extends React.ElementType = "div">({ as, style, ...props }: SliderRangeProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { percentage, disabled } = useSliderContext("Slider.Range");

    return (
        <Component
            {...props}
            aria-hidden="true"
            data-disabled={disabled ? "true" : undefined}
            style={{
                position: "absolute",
                insetInlineStart: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: `${percentage}%`,
                height: 6,
                borderRadius: theme.radius.pill,
                backgroundColor: disabled ? theme.colors.border.disabled : theme.colors.primary[500],
                ...style,
            }}
        />
    );
}
