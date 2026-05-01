import * as React from "react";

import { useTheme } from "../../theme";
import { useDialogContext } from "./dialog.context";

import type { DialogTitleProps } from "./dialog.types";

export function DialogTitle<T extends React.ElementType = "h2">({
    as,
    children,
    style,
    ...props
}: DialogTitleProps<T>) {
    const theme = useTheme();
    const { titleId, setHasTitle } = useDialogContext();
    const Component = (as ?? "h2") as React.ElementType;

    React.useEffect(() => {
        setHasTitle(true);

        return () => {
            setHasTitle(false);
        };
    }, [setHasTitle]);

    return (
        <Component
            {...props}
            id={titleId}
            style={{
                margin: 0,
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily.semibold,
                fontWeight: theme.fontWeight.semibold,
                fontSize: theme.typography.title.sm.fontSize,
                lineHeight: `${theme.typography.title.sm.lineHeight}px`,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
