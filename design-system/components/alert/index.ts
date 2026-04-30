import { AlertDescription } from "./alert.description";
import { AlertRoot } from "./alert.root";
import { AlertTitle } from "./alert.title";

export const Alert = {
    Root: AlertRoot,
    Title: AlertTitle,
    Description: AlertDescription,
};

export { AlertDescription, AlertRoot, AlertTitle };
export * from "./alert.types";
