import * as React from "react";

type ActionSheetContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const ActionSheetContext = React.createContext<ActionSheetContextValue | null>(null);

export function useActionSheetContext() {
    const context = React.useContext(ActionSheetContext);

    if (!context) {
        throw new Error("ActionSheet components must be used within ActionSheet.Root");
    }

    return context;
}
