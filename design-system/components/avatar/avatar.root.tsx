import * as React from "react";

import { useTheme } from "../../theme";

import type { AvatarProps, AvatarSize } from "./avatar.types";

const sizeMap: Record<AvatarSize, number> = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 56,
};

function getInitials(name?: string): string {
    if (!name) {
        return "";
    }

    const trimmedName = name.trim();
    if (!trimmedName) {
        return "";
    }

    const [firstName = "", lastName = ""] = trimmedName.split(/\s+/);
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function AvatarRoot({
    alt,
    src,
    name,
    size = "md",
    radius = "circle",
    fallback,
    style,
    imageStyle,
    ...props
}: AvatarProps) {
    const theme = useTheme();
    const [hasImageError, setHasImageError] = React.useState(false);

    const avatarSize = sizeMap[size];
    const hasImage = Boolean(src) && !hasImageError;
    const initials = getInitials(name);

    return (
        <span
            {...props}
            aria-label={alt ?? name}
            role="img"
            style={{
                width: avatarSize,
                height: avatarSize,
                borderRadius: theme.radius[radius],
                backgroundColor: theme.colors.surface.muted,
                color: theme.colors.text.secondary,
                border: `1px solid ${theme.colors.border.default}`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: Math.max(10, Math.floor(avatarSize * 0.4)),
                lineHeight: 1,
                userSelect: "none",
                ...style,
            }}
        >
            {hasImage ? (
                <img
                    src={src}
                    alt={alt ?? name ?? "Avatar"}
                    onError={() => setHasImageError(true)}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        ...imageStyle,
                    }}
                />
            ) : (
                fallback ?? (initials || "?")
            )}
        </span>
    );
}
