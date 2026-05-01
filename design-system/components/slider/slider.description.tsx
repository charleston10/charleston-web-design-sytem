import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderDescriptionProps } from "./slider.types";

export function SliderDescription<T extends React.ElementType = "p">({ as, style, ...props }: SliderDescriptionProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "p") as React.ElementType;
    const { descriptionId } = useSliderContext("Slider.Description");

    return (
        <Component
            {...props}
            id={descriptionId}
            style={{
                margin: 0,
                color: theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.regular,
                fontSize: theme.typography.caption.sm.fontSize,
                lineHeight: `${theme.typography.caption.sm.lineHeight}px`,
                ...style,
            }}
        />
    );
}
