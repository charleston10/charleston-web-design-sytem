import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderTrackProps } from "./slider.types";

export function SliderTrack<T extends React.ElementType = "div">({ as, style, ...props }: SliderTrackProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;
    const { disabled } = useSliderContext("Slider.Track");

    return (
        <Component
            {...props}
            aria-hidden="true"
            data-disabled={disabled ? "true" : undefined}
            style={{
                position: "absolute",
                insetInline: 0,
                top: "50%",
                transform: "translateY(-50%)",
                height: 6,
                borderRadius: theme.radius.pill,
                backgroundColor: theme.colors.surface.disabled,
                ...style,
            }}
        />
    );
}
