import * as React from "react";

import { useTheme } from "../../theme";

import { useAvatarContext } from "./avatar.context";
import type { AvatarContentProps, AvatarSize } from "./avatar.types";

const sizeMap: Record<AvatarSize, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 72,
};

function getInitials(name?: string): string {
    if (!name) {
        return "?";
    }

    const parts = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2);

    if (parts.length === 0) {
        return "?";
    }

    return parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
}

export function AvatarContent({ src, alt, name, fallback, style, ...props }: AvatarContentProps) {
    const theme = useTheme();
    const { size } = useAvatarContext();
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        setHasError(false);
    }, [src]);

    if (src && !hasError) {
        return (
            <img
                {...props}
                src={src}
                alt={alt ?? name ?? "Avatar"}
                onError={() => setHasError(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    ...style,
                }}
            />
        );
    }

    return (
        <span
            aria-label={alt ?? name ?? "Avatar"}
            style={{
                width: "100%",
                height: "100%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: theme.typography.fontFamily.medium,
                fontWeight: theme.fontWeight.medium,
                fontSize: Math.max(10, Math.round(sizeMap[size] * 0.36)),
                lineHeight: 1,
                textTransform: "uppercase",
                userSelect: "none",
                ...style,
            }}
        >
            {fallback ?? getInitials(name)}
        </span>
    );
}
