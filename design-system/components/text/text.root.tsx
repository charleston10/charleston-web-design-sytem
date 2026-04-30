import * as React from "react";

import { useTheme } from "../../theme";

import type { TextProps, TextVariant } from "./text.types";

type VariantStyle = { fontSize: number; lineHeight: number };

function getVariantStyle(theme: ReturnType<typeof useTheme>, variant: TextVariant): VariantStyle {
    const variantMap: Record<TextVariant, VariantStyle> = {
        "title-lg": theme.typography.title.lg,
        "title-md": theme.typography.title.md,
        "title-sm": theme.typography.title.sm,
        "subtitle-md": theme.typography.subtitle.md,
        "subtitle-sm": theme.typography.subtitle.sm,
        "body-lg": theme.typography.body.lg,
        "body-md": theme.typography.body.md,
        "body-sm": theme.typography.body.sm,
        "label-md": theme.typography.label.md,
        "label-sm": theme.typography.label.sm,
        "caption-sm": theme.typography.caption.sm,
        small: theme.typography.small,
    };

    return variantMap[variant];
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
