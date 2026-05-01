import { ToolbarActions } from "./toolbar.actions";
import { ToolbarContent } from "./toolbar.content";
import { ToolbarRoot } from "./toolbar.root";
import { ToolbarSeparator } from "./toolbar.separator";

export const Toolbar = {
    Root: ToolbarRoot,
    Content: ToolbarContent,
    Actions: ToolbarActions,
    Separator: ToolbarSeparator,
};

export { ToolbarActions, ToolbarContent, ToolbarRoot, ToolbarSeparator };
export * from "./toolbar.types";
