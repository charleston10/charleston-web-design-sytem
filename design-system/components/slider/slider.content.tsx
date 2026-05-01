import * as React from "react";

import { useSliderContext } from "./slider.context";
import type { SliderContentProps, SliderSize } from "./slider.types";

const sizeMap: Record<SliderSize, { minHeight: number; trackHeight: number }> = {
    sm: { minHeight: 24, trackHeight: 4 },
    md: { minHeight: 32, trackHeight: 6 },
    lg: { minHeight: 40, trackHeight: 8 },
};

export function SliderContent<T extends React.ElementType = "div">({ as, size = "md", radius = "pill", children, style, onPointerDown, ...props }: SliderContentProps<T>) {
    const Component = (as ?? "div") as React.ElementType;

    const { inputId, name, value, min, max, step, disabled, readOnly, invalid, required, setValue } = useSliderContext("Slider.Content");

    const contentRef = React.useRef<HTMLElement | null>(null);

    function calculateValueFromClientX(clientX: number) {
        const target = contentRef.current;

        if (!target) {
            return value;
        }

        const rect = target.getBoundingClientRect();
        const boundedX = Math.min(Math.max(clientX, rect.left), rect.right);
        const progress = rect.width === 0 ? 0 : (boundedX - rect.left) / rect.width;
        const nextValue = min + progress * (max - min);
        const steps = Math.round((nextValue - min) / step);

        return min + steps * step;
    }

    function handlePointerDown(event: React.PointerEvent<Element>) {
        onPointerDown?.(event as React.PointerEvent<any>);

        if (event.defaultPrevented || disabled || readOnly) {
            return;
        }

        const pointerId = event.pointerId;
        const eventTarget = event.currentTarget as Element;

        eventTarget.setPointerCapture(pointerId);
        setValue(calculateValueFromClientX(event.clientX));

        function handlePointerMove(moveEvent: PointerEvent) {
            setValue(calculateValueFromClientX(moveEvent.clientX));
        }

        function handlePointerUp() {
            eventTarget.releasePointerCapture(pointerId);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        }

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp, { once: true });
    }

    const sizeStyle = sizeMap[size];

    return (
        <Component
            {...props}
            ref={(node: Element | null) => {
                contentRef.current = node as HTMLElement | null;
            }}
            onPointerDown={handlePointerDown}
            data-disabled={disabled ? "true" : undefined}
            data-invalid={invalid ? "true" : undefined}
            data-readonly={readOnly ? "true" : undefined}
            data-size={size}
            data-radius={radius}
            style={{
                position: "relative",
                width: "100%",
                minHeight: sizeStyle.minHeight,
                display: "flex",
                alignItems: "center",
                touchAction: "none",
                cursor: disabled || readOnly ? "not-allowed" : "pointer",
                ...style,
            }}
        >
            <input
                id={inputId}
                name={name}
                type="hidden"
                value={value}
                required={required}
                readOnly
            />
            {children}
        </Component>
    );
}
