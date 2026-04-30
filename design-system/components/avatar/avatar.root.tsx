import * as React from "react";

import { useTheme } from "../../theme";

import { AvatarContext } from "./avatar.context";
import type { AvatarRootProps, AvatarShape, AvatarSize } from "./avatar.types";

const sizeMap: Record<AvatarSize, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
};

function getBorderRadius(shape: AvatarShape, circleRadius: number, roundedRadius: number): number {
    if (shape === "square") {
        return 0;
    }

    if (shape === "rounded") {
        return roundedRadius;
    }

    return circleRadius;
}

export function AvatarRoot({ size = "md", shape = "circle", children, style, ...props }: AvatarRootProps) {
    const theme = useTheme();
    const avatarSize = sizeMap[size];
    const borderRadius = getBorderRadius(shape, theme.radius.circle, theme.radius.sm);

    return (
        <AvatarContext.Provider value={{ size, shape }}>
            <div
                {...props}
                style={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius,
                    overflow: "hidden",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colors.surface.muted,
                    color: theme.colors.text.secondary,
                    border: `1px solid ${theme.colors.border.subtle}`,
                    ...style,
                }}
            >
                {children}
            </div>
        </AvatarContext.Provider>
    );
}
