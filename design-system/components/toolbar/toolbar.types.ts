import type * as React from "react";

import type { Theme } from "../../theme";

type ToolbarOrientation = "horizontal" | "vertical";
type ToolbarPosition = "top" | "bottom";
type ToolbarRadius = keyof Theme["radius"];

type ToolbarSharedProps<T extends React.ElementType> = {
    as?: T;
    children?: React.ReactNode;
    style?: React.CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style">;

export type ToolbarRootProps<T extends React.ElementType = "div"> = ToolbarSharedProps<T> & {
    orientation?: ToolbarOrientation;
    position?: ToolbarPosition;
    radius?: ToolbarRadius;
    bordered?: boolean;
};

export type ToolbarContentProps<T extends React.ElementType = "div"> = ToolbarSharedProps<T>;

export type ToolbarActionsProps<T extends React.ElementType = "div"> = ToolbarSharedProps<T>;

export type ToolbarSeparatorProps<T extends React.ElementType = "div"> = ToolbarSharedProps<T>;

export type { ToolbarOrientation, ToolbarPosition, ToolbarRadius };
