import * as React from "react";

import { useTheme } from "../../theme";

import { useSliderContext } from "./slider.context";
import type { SliderThumbProps } from "./slider.types";

export function SliderThumb<T extends React.ElementType = "div">({ as, style, onKeyDown, ...props }: SliderThumbProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    const {
        labelId,
        descriptionId,
        messageId,
        value,
        min,
        max,
        step,
        percentage,
        disabled,
        readOnly,
        invalid,
        required,
        ariaLabel,
        ariaValueText,
        setValue,
        increment,
        decrement,
    } = useSliderContext("Slider.Thumb");

    function handleKeyDown(event: React.KeyboardEvent<Element>) {
        onKeyDown?.(event as React.KeyboardEvent<any>);

        if (event.defaultPrevented || disabled || readOnly) {
            return;
        }

        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            event.preventDefault();
            increment();
            return;
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            event.preventDefault();
            decrement();
            return;
        }

        if (event.key === "PageUp") {
            event.preventDefault();
            setValue(value + step * 10);
            return;
        }

        if (event.key === "PageDown") {
            event.preventDefault();
            setValue(value - step * 10);
            return;
        }

        if (event.key === "Home") {
            event.preventDefault();
            setValue(min);
            return;
        }

        if (event.key === "End") {
            event.preventDefault();
            setValue(max);
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
        }
    }

    return (
        <Component
            {...props}
            role="slider"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            aria-label={ariaLabel}
            aria-labelledby={labelId}
            aria-describedby={[descriptionId, messageId].join(" ")}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-valuetext={ariaValueText}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            aria-invalid={invalid}
            aria-required={required}
            data-disabled={disabled ? "true" : undefined}
            data-invalid={invalid ? "true" : undefined}
            data-readonly={readOnly ? "true" : undefined}
            style={{
                position: "absolute",
                insetInlineStart: `${percentage}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 18,
                height: 18,
                borderRadius: theme.radius.circle,
                border: `2px solid ${invalid ? theme.colors.feedback.error : theme.colors.primary[500]}`,
                backgroundColor: disabled ? theme.colors.surface.disabled : theme.colors.surface.default,
                outline: "none",
                cursor: disabled || readOnly ? "not-allowed" : "grab",
                boxSizing: "border-box",
                ...style,
            }}
        />
    );
}
