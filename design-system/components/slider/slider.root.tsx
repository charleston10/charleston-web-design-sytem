import * as React from "react";

import { useTheme } from "../../theme";

import { SliderContext } from "./slider.context";
import type { SliderRootProps } from "./slider.types";

function clampValue(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

function normalizeStep(step: number | undefined) {
    if (!Number.isFinite(step) || !step || step <= 0) {
        return 1;
    }

    return step;
}

function roundToStep(value: number, min: number, step: number) {
    const stepCount = Math.round((value - min) / step);
    return min + stepCount * step;
}

export function SliderRoot<T extends React.ElementType = "div">({
    as,
    children,
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    readOnly = false,
    invalid = false,
    required = false,
    name,
    ariaLabel = "Slider",
    ariaValueText,
    onValueChange,
    style,
    ...props
}: SliderRootProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "div") as React.ElementType;

    const inputId = React.useId();
    const labelId = React.useId();
    const descriptionId = React.useId();
    const messageId = React.useId();

    const safeMin = Number.isFinite(min) ? min : 0;
    const safeMax = Number.isFinite(max) && max >= safeMin ? max : safeMin;
    const safeStep = normalizeStep(step);

    const isControlled = value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = React.useState(() => clampValue(defaultValue, safeMin, safeMax));
    const currentRawValue = isControlled ? (value as number) : uncontrolledValue;
    const currentValue = clampValue(roundToStep(currentRawValue, safeMin, safeStep), safeMin, safeMax);

    const setValue = React.useCallback(
        (nextValue: number) => {
            if (disabled || readOnly) {
                return;
            }

            const normalizedValue = clampValue(roundToStep(nextValue, safeMin, safeStep), safeMin, safeMax);

            if (!isControlled) {
                setUncontrolledValue(normalizedValue);
            }

            onValueChange?.(normalizedValue);
        },
        [disabled, isControlled, onValueChange, readOnly, safeMax, safeMin, safeStep],
    );

    const increment = React.useCallback(() => {
        setValue(currentValue + safeStep);
    }, [currentValue, safeStep, setValue]);

    const decrement = React.useCallback(() => {
        setValue(currentValue - safeStep);
    }, [currentValue, safeStep, setValue]);

    const percentage = safeMax === safeMin ? 0 : ((currentValue - safeMin) / (safeMax - safeMin)) * 100;

    const contextValue = React.useMemo(
        () => ({
            inputId,
            labelId,
            descriptionId,
            messageId,
            name,
            value: currentValue,
            min: safeMin,
            max: safeMax,
            step: safeStep,
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
        }),
        [ariaLabel, ariaValueText, currentValue, decrement, descriptionId, disabled, increment, inputId, invalid, labelId, messageId, name, percentage, readOnly, required, safeMax, safeMin, safeStep, setValue],
    );

    return (
        <SliderContext.Provider value={contextValue}>
            <Component
                {...props}
                data-disabled={disabled ? "true" : undefined}
                data-invalid={invalid ? "true" : undefined}
                data-readonly={readOnly ? "true" : undefined}
                aria-label={ariaLabel}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing.xs,
                    width: "100%",
                    ...style,
                }}
            >
                {children}
            </Component>
        </SliderContext.Provider>
    );
}
