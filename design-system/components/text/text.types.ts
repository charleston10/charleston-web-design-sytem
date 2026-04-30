import * as React from "react";

import { Theme } from "../../theme";

type TextTone = keyof Theme["colors"]["text"];
type TextWeight = keyof Theme["fontWeight"];

type TextVariant =
    | "title-lg"
    | "title-md"
    | "title-sm"
    | "subtitle-md"
    | "subtitle-sm"
    | "body-lg"
    | "body-md"
    | "body-sm"
    | "label-md"
    | "label-sm"
    | "caption-sm"
    | "small";

export type TextProps<T extends React.ElementType = "p"> = {
    as?: T;
    children?: React.ReactNode;
    variant?: TextVariant;
    tone?: TextTone;
    weight?: TextWeight;
    truncate?: boolean;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type { TextTone, TextVariant, TextWeight };
