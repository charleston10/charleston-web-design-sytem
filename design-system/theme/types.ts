export type Theme = {
    /* ----------------------------------
     * Colors
     * ---------------------------------- */
    colors: {
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };

        secondary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        background: {
            default: string;
            elevated: string;
            muted: string;
            overlay: string;
            transparent: string;
        };

        surface: {
            default: string;
            hover: string;
            pressed: string;
            disabled: string;
            muted: string;
        };

        text: {
            primary: string;
            secondary: string;
            muted: string;
            inverse: string;
            disabled: string;
            placeholder: string;
            link: string;
        };

        button: {
            primary: string;
            secondary: string;
            outline: string;
            ghost: string;
            destructive: string;
        };

        border: {
            default: string;
            subtle: string;
            strong: string;
            focus: string;
            disabled: string;
        };

        brand: {
            primary: string;
            primaryHover: string;
            primaryPressed: string;

            secondary: string;
            secondaryHover: string;
            secondaryPressed: string;
        };

        feedback: {
            success: string;
            warning: string;
            error: string;
            info: string;
        };

        state: {
            selected: string;
            active: string;
            inactive: string;
        };
    };

    /* ----------------------------------
     * Spacing
     * ---------------------------------- */
    spacing: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
        xxxl: number;
    };

    /* ----------------------------------
     * Radius
     * ---------------------------------- */
    radius: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        pill: number;
        circle: number;
    };

    /* ----------------------------------
     * Typography
     * ---------------------------------- */
    typography: {
        fontFamily: {
            regular: string;
            medium: string;
            semibold: string;
            bold: string;
            monospace: string;
        };

        title: {
            sm: { fontSize: number; lineHeight: number };
            md: { fontSize: number; lineHeight: number };
            lg: { fontSize: number; lineHeight: number };
        };

        subtitle: {
            sm: { fontSize: number; lineHeight: number };
            md: { fontSize: number; lineHeight: number };
        };

        body: {
            sm: { fontSize: number; lineHeight: number };
            md: { fontSize: number; lineHeight: number };
            lg: { fontSize: number; lineHeight: number };
        };

        label: {
            sm: { fontSize: number; lineHeight: number };
            md: { fontSize: number; lineHeight: number };
        };

        caption: {
            sm: { fontSize: number; lineHeight: number };
        };

        small: {
            fontSize: number;
            lineHeight: number;
        };
    };

    /* ----------------------------------
     * Font Weight
     * ---------------------------------- */
    fontWeight: {
        regular: "400";
        medium: "500";
        semibold: "600";
        bold: "700";
    };

    /* ----------------------------------
     * Elevation / Shadow
     * ---------------------------------- */
    elevation: {
        none: number;
        sm: number;
        md: number;
        lg: number;
    };

    shadow: {
        sm: {
            color: string;
            offset: { width: number; height: number };
            opacity: number;
            radius: number;
        };
        md: {
            color: string;
            offset: { width: number; height: number };
            opacity: number;
            radius: number;
        };
        lg: {
            color: string;
            offset: { width: number; height: number };
            opacity: number;
            radius: number;
        };
    };

    /* ----------------------------------
     * Animation / Motion
     * ---------------------------------- */
    motion: {
        fast: number;
        normal: number;
        slow: number;

        easing: {
            standard: string;
            decelerate: string;
            accelerate: string;
        };
    };

    /* ----------------------------------
     * Opacity
     * ---------------------------------- */
    opacity: {
        disabled: number;
        pressed: number;
        overlay: number;
    };

    /* ----------------------------------
     * Z-Index
     * ---------------------------------- */
    zIndex: {
        base: number;
        dropdown: number;
        overlay: number;
        modal: number;
        toast: number;
    };

    /* ----------------------------------
     * Interaction
     * ---------------------------------- */
    interaction: {
        /**
         * Ripple nativo (Material / Android)
         */
        ripple: string;

        /**
         * Overlay para estado pressed (iOS / Web)
         */
        pressed: string;

        /**
         * Hover (Web / Desktop)
         */
        hover: string;

        /**
         * Focus ring / highlight
         */
        focus: string;

        /**
         * Estado selecionado (tabs, list item, etc)
         */
        selected: string;

        /**
         * Overlay para disabled (além da opacity)
         */
        disabled: string;
    };

    stateLayer: {
        /**
         * Cor base do overlay
         * (normalmente onPrimary ou onSurface)
         */
        color: {
            onPrimary: string;
            onSurface: string;
            onBackground: string;
        };

        /**
         * Opacidades oficiais do Material
         */
        opacity: {
            hover: number; // 0.08 (M3) | 0.04 (M2)
            focus: number; // 0.12
            pressed: number; // 0.12
            dragged: number; // 0.16
            disabled: number; // 0.38
        };
    };
};
