import * as React from "react";

import { useTheme } from "../../theme";

import type { TextProps, TextVariant } from "./text.types";

const variantStyleMap: Record<TextVariant, { fontSize: number; lineHeight: number }> = {
    "title-lg": { fontSize: 26, lineHeight: 32 },
    "title-md": { fontSize: 22, lineHeight: 26 },
    "title-sm": { fontSize: 18, lineHeight: 22 },
    "subtitle-md": { fontSize: 18, lineHeight: 22 },
    "subtitle-sm": { fontSize: 16, lineHeight: 20 },
    "body-lg": { fontSize: 20, lineHeight: 26 },
    "body-md": { fontSize: 18, lineHeight: 24 },
    "body-sm": { fontSize: 16, lineHeight: 22 },
    "label-md": { fontSize: 16, lineHeight: 20 },
    "label-sm": { fontSize: 14, lineHeight: 18 },
    "caption-sm": { fontSize: 14, lineHeight: 18 },
    small: { fontSize: 12, lineHeight: 16 },
};

function getVariantStyle(theme: ReturnType<typeof useTheme>, variant: TextVariant) {
    if (variant === "small") {
        return theme.typography.small;
    }

    const [group, size] = variant.split("-") as [Exclude<TextVariant, "small"> extends `${infer G}-${infer S}` ? G : never, string];

    if (group === "title" || group === "subtitle" || group === "body" || group === "label" || group === "caption") {
        const scopedTheme = theme.typography[group] as Record<string, { fontSize: number; lineHeight: number }>;
        return scopedTheme[size] ?? variantStyleMap[variant];
    }

    return variantStyleMap[variant];
}

export function TextRoot<T extends React.ElementType = "p">({
    as,
    children,
    variant = "body-sm",
    tone = "primary",
    weight = "regular",
    truncate = false,
    style,
    ...props
}: TextProps<T>) {
    const theme = useTheme();
    const Component = (as ?? "p") as React.ElementType;

    const typographyStyle = getVariantStyle(theme, variant);

    const truncateStyle: React.CSSProperties = truncate
        ? {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
          }
        : {};

    return (
        <Component
            {...props}
            style={{
                margin: 0,
                color: theme.colors.text[tone],
                fontFamily: theme.typography.fontFamily.regular,
                fontWeight: theme.fontWeight[weight],
                fontSize: typographyStyle.fontSize,
                lineHeight: `${typographyStyle.lineHeight}px`,
                ...truncateStyle,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
