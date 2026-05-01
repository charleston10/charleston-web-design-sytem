import { DialogClose } from "./dialog.close";
import { DialogContent } from "./dialog.content";
import { DialogDescription } from "./dialog.description";
import { DialogFooter } from "./dialog.footer";
import { DialogHeader } from "./dialog.header";
import { DialogOverlay } from "./dialog.overlay";
import { DialogRoot } from "./dialog.root";
import { DialogTitle } from "./dialog.title";
import { DialogTrigger } from "./dialog.trigger";

export const Dialog = {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Header: DialogHeader,
    Footer: DialogFooter,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
};

export {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
};
export * from "./dialog.types";
