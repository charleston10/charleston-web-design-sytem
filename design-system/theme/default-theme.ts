import {Theme} from "./types";

export const defaultTheme: Theme = {
    /* ----------------------------------
     * Colors
     * ---------------------------------- */
    colors: {
        primary: {
            50: "#EFF6FF",
            100: "#DBEAFE",
            200: "#BFDBFE",
            300: "#93C5FD",
            400: "#60A5FA",
            500: "#2563EB",
            600: "#1D4ED8",
            700: "#1E40AF",
            800: "#1E3A8A",
            900: "#1E3A8A",
        },

        secondary: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
        },

        background: {
            default: "#FFFFFF",
            elevated: "#F9FAFB",
            muted: "#F3F4F6",
            overlay: "rgba(0,0,0,0.4)",
            transparent: "transparent",
        },

        surface: {
            default: "#FFFFFF",
            hover: "#F9FAFB",
            pressed: "#F3F4F6",
            disabled: "#E5E7EB",
            muted: "#F3F4F6",
        },

        text: {
            primary: "#111827",
            secondary: "#374151",
            muted: "#6B7280",
            inverse: "#FFFFFF",
            disabled: "#9CA3AF",
            placeholder: "#9CA3AF",
            link: "#2563EB",
        },

        button: {
            primary: "#2563EB",
            secondary: "#64748B",
            outline: "transparent",
            ghost: "transparent",
            destructive: "#DC2626",
        },

        border: {
            default: "#E5E7EB",
            subtle: "#F3F4F6",
            strong: "#D1D5DB",
            focus: "#2563EB",
            disabled: "#E5E7EB",
        },

        brand: {
            primary: "#2563EB",
            primaryHover: "#1D4ED8",
            primaryPressed: "#1E40AF",

            secondary: "#64748B",
            secondaryHover: "#475569",
            secondaryPressed: "#334155",
        },

        feedback: {
            success: "#16A34A",
            warning: "#F59E0B",
            error: "#DC2626",
            info: "#0284C7",
        },

        state: {
            selected: "#2563EB",
            active: "#1D4ED8",
            inactive: "#9CA3AF",
        },
    },

    /* ----------------------------------
     * Spacing
     * ---------------------------------- */
    spacing: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
        xxxl: 64,
    },

    /* ----------------------------------
     * Radius
     * ---------------------------------- */
    radius: {
        none: 0,
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
        pill: 999,
        circle: 9999,
    },

    /* ----------------------------------
     * Typography
     * ---------------------------------- */
    typography: {
        fontFamily: {
            regular: "System",
            medium: "System",
            semibold: "System",
            bold: "System",
            monospace: "Courier",
        },

        title: {
            sm: {
                fontSize: 18,
                lineHeight: 22,
            },
            md: {
                fontSize: 22,
                lineHeight: 26,
            },
            lg: {
                fontSize: 26,
                lineHeight: 32,
            },
        },

        subtitle: {
            sm: {
                fontSize: 16,
                lineHeight: 20,
            },
            md: {
                fontSize: 18,
                lineHeight: 22,
            },
        },

        body: {
            sm: {
                fontSize: 16,
                lineHeight: 22,
            },
            md: {
                fontSize: 18,
                lineHeight: 24,
            },
            lg: {
                fontSize: 20,
                lineHeight: 26,
            },
        },

        label: {
            sm: {
                fontSize: 14,
                lineHeight: 18,
            },
            md: {
                fontSize: 16,
                lineHeight: 20,
            },
        },

        caption: {
            sm: {
                fontSize: 14,
                lineHeight: 18,
            },
        },
        small: {
            fontSize: 12,
            lineHeight: 16,
        },
    },

    /* ----------------------------------
     * Font Weight
     * ---------------------------------- */
    fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },

    /* ----------------------------------
     * Elevation
     * ---------------------------------- */
    elevation: {
        none: 0,
        sm: 1,
        md: 3,
        lg: 6,
    },

    /* ----------------------------------
     * Shadow
     * ---------------------------------- */
    shadow: {
        sm: {
            color: "#000",
            offset: {width: 0, height: 1},
            opacity: 0.1,
            radius: 2,
        },
        md: {
            color: "#000",
            offset: {width: 0, height: 4},
            opacity: 0.15,
            radius: 6,
        },
        lg: {
            color: "#000",
            offset: {
                width: 0,
                height: 8,
            },
            opacity: 0.2,
            radius: 12,
        },
    },

    /* ----------------------------------
     * Motion
     * ---------------------------------- */
    motion: {
        fast: 150,
        normal: 250,
        slow: 400,

        easing: {
            standard: "ease",
            decelerate: "ease-out",
            accelerate: "ease-in",
        },
    },

    /* ----------------------------------
     * Opacity
     * ---------------------------------- */
    opacity: {
        disabled: 0.5,
        pressed: 0.85,
        overlay: 0.4,
    },

    /* ----------------------------------
     * Z-Index
     * ---------------------------------- */
    zIndex: {
        base: 0,
        dropdown: 10,
        overlay: 20,
        modal: 30,
        toast: 40,
    },

    /* ----------------------------------
     * Interaction
     * ---------------------------------- */
    interaction: {
        ripple: "rgba(255,255,255,0.2)",
        pressed: "rgba(0,0,0,0.08)",
        hover: "rgba(0,0,0,0.04)",
        focus: "rgba(0,0,0,0.12)",
        selected: "rgba(0,0,0,0.1)",
        disabled: "rgba(0,0,0,0.05)",
    },

    stateLayer: {
        color: {
            onPrimary: "#FFFFFF",
            onSurface: "#000000",
            onBackground: "#000000",
        },
        opacity: {
            hover: 0.08,
            focus: 0.12,
            pressed: 0.12,
            dragged: 0.16,
            disabled: 0.38,
        },
    },
};
