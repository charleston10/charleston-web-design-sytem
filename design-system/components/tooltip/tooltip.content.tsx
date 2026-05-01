import * as React from "react";

import { useTheme } from "../../theme";

import { useTooltipContext } from "./tooltip.context";
import type { TooltipContentProps, TooltipSide } from "./tooltip.types";

type TooltipPosition = {
    top: number;
    left: number;
};

function getTooltipPosition(triggerRect: DOMRect, side: TooltipSide, offset: number): TooltipPosition {
    if (side === "top") {
        return { top: triggerRect.top - offset, left: triggerRect.left + triggerRect.width / 2 };
    }

    if (side === "right") {
        return { top: triggerRect.top + triggerRect.height / 2, left: triggerRect.right + offset };
    }

    if (side === "left") {
        return { top: triggerRect.top + triggerRect.height / 2, left: triggerRect.left - offset };
    }

    return { top: triggerRect.bottom + offset, left: triggerRect.left + triggerRect.width / 2 };
}

function getTooltipTransform(side: TooltipSide): string {
    if (side === "top") {
        return "translate(-50%, -100%)";
    }

    if (side === "right") {
        return "translate(0, -50%)";
    }

    if (side === "left") {
        return "translate(-100%, -50%)";
    }

    return "translate(-50%, 0)";
}

export function TooltipContent({ children, side, offset = 8, style, ...props }: TooltipContentProps) {
    const theme = useTheme();
    const { contentId, open, triggerRef, side: rootSide } = useTooltipContext();
    const [position, setPosition] = React.useState<TooltipPosition | null>(null);
    const resolvedSide = side ?? rootSide;

    React.useEffect(() => {
        if (!open || !triggerRef.current) {
            return;
        }

        const updatePosition = () => {
            if (!triggerRef.current) {
                return;
            }

            const triggerRect = triggerRef.current.getBoundingClientRect();
            setPosition(getTooltipPosition(triggerRect, resolvedSide, offset));
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [open, offset, resolvedSide, triggerRef]);

    if (!open || !position) {
        return null;
    }

    const shadow = theme.shadow.md;

    return (
        <div
            {...props}
            id={contentId}
            role="tooltip"
            style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                transform: getTooltipTransform(resolvedSide),
                zIndex: theme.zIndex.dropdown,
                maxWidth: 240,
                padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
                borderRadius: theme.radius.sm,
                backgroundColor: theme.colors.text.primary,
                color: theme.colors.text.inverse,
                fontFamily: theme.typography.fontFamily.regular,
                fontSize: theme.typography.small.fontSize,
                lineHeight: `${theme.typography.small.lineHeight}px`,
                boxShadow: `${shadow.offset.width}px ${shadow.offset.height}px ${shadow.radius}px rgba(0, 0, 0, ${shadow.opacity})`,
                pointerEvents: "none",
                ...style,
            }}
        >
            {children}
        </div>
    );
}
