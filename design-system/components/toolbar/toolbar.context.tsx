import * as React from "react";

import type { ToolbarOrientation } from "./toolbar.types";

type ToolbarContextValue = {
    orientation: ToolbarOrientation;
};

export const ToolbarContext = React.createContext<ToolbarContextValue | null>(null);

export function useToolbarContext(componentName: string) {
    const context = React.useContext(ToolbarContext);

    if (!context) {
        throw new Error(`${componentName} must be used within Toolbar.Root`);
    }

    return context;
}
