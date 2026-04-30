import * as React from "react";

import { ThemeContext } from "./context";
import { defaultTheme } from "./default-theme";
import { Theme } from "./types";

type ThemeProviderProps = {
    children: React.ReactNode;
    theme?: Theme;
};

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
    return <ThemeContext.Provider value={theme ?? defaultTheme}>{children}</ThemeContext.Provider>;
}
