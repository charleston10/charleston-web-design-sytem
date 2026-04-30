import { AlertContent } from "./alert.content";
import { AlertDescription } from "./alert.description";
import { AlertRoot } from "./alert.root";
import { AlertTitle } from "./alert.title";

export const Alert = {
    Root: AlertRoot,
    Content: AlertContent,
    Title: AlertTitle,
    Description: AlertDescription,
};

export { AlertContent, AlertDescription, AlertRoot, AlertTitle };
export * from "./alert.types";
