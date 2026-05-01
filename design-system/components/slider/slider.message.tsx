import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderMessageProps } from "./slider.types";

export function SliderMessage<T extends React.ElementType = "p">({ as, style, ...props }: SliderMessageProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "p") as React.ElementType;
    const { messageId, invalid } = useSliderContext("Slider.Message");

    return (
        <Component
            {...props}
            id={messageId}
            style={{
                margin: 0,
                color: invalid ? theme.colors.feedback.error : theme.colors.text.muted,
                fontFamily: theme.typography.fontFamily.regular,
                fontSize: theme.typography.caption.sm.fontSize,
                lineHeight: `${theme.typography.caption.sm.lineHeight}px`,
                ...style,
            }}
        />
    );
}
