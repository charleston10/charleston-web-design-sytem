import { TooltipContent } from "./tooltip.content";
import { TooltipRoot } from "./tooltip.root";
import { TooltipTrigger } from "./tooltip.trigger";

export const Tooltip = {
    Root: TooltipRoot,
    Trigger: TooltipTrigger,
    Content: TooltipContent,
};

export { TooltipContent, TooltipRoot, TooltipTrigger };
export * from "./tooltip.content";
export * from "./tooltip.root";
export * from "./tooltip.trigger";
export * from "./tooltip.types";
