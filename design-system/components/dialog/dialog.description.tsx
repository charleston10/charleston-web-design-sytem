import * as React from "react";

import { useTheme } from "../../theme";
import { useDialogContext } from "./dialog.context";

import type { DialogDescriptionProps } from "./dialog.types";

export function DialogDescription<T extends React.ElementType = "p">({
    as,
    children,
    style,
    ...props
}: DialogDescriptionProps<T>) {
    const theme = useTheme();
    const { descriptionId, setHasDescription } = useDialogContext();
    const Component = (as ?? "p") as React.ElementType;

    React.useEffect(() => {
        setHasDescription(true);

        return () => {
            setHasDescription(false);
        };
    }, [setHasDescription]);

    return (
        <Component
            {...props}
            id={descriptionId}
            style={{
                margin: 0,
                color: theme.colors.text.secondary,
                fontFamily: theme.typography.fontFamily.regular,
                fontWeight: theme.fontWeight.regular,
                fontSize: theme.typography.body.sm.fontSize,
                lineHeight: `${theme.typography.body.sm.lineHeight}px`,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
