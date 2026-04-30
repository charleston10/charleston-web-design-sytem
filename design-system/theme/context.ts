import { createContext } from "react";

import { defaultTheme } from "./default-theme";
import { Theme } from "./types";

export const ThemeContext = createContext<Theme>(defaultTheme);
