import * as React from "react";

import type { AvatarShape, AvatarSize } from "./avatar.types";

export type AvatarContextValue = {
    size: AvatarSize;
    shape: AvatarShape;
};

export const AvatarContext = React.createContext<AvatarContextValue | null>(null);

export function useAvatarContext(): AvatarContextValue {
    const context = React.useContext(AvatarContext);

    if (!context) {
        throw new Error("Avatar.Content must be used inside Avatar.Root");
    }

    return context;
}
