/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,

    env: {
        es2021: true,
        node: true,
        browser: true,
    },

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    plugins: ["@typescript-eslint", "react", "react-hooks", "import"],

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
    ],

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            },
        },
    },

    rules: {
        /* ======================================================
         * Imports
         * ===================================================== */

        // Garante ordem e grupos de import
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "react-native",
                        group: "external",
                        position: "before",
                    },
                    {
                        pattern: "@charleston/**",
                        group: "internal",
                    },
                    {
                        pattern: "@ds/**",
                        group: "internal",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],

        /* ======================================================
         * Hooks
         * ===================================================== */

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        /* ======================================================
         * Organização interna do componente
         * ===================================================== */

        // Evita uso antes da definição (força hooks e estados no topo)
        "no-use-before-define": [
            "error",
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],

        // Evita código inalcançável após return
        "no-unreachable": "error",

        // Força retorno consistente
        "consistent-return": "error",

        /* ======================================================
         * TypeScript
         * ===================================================== */

        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],

        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
            },
        ],

        "@typescript-eslint/no-explicit-any": "warn",

        /* ======================================================
         * React
         * ===================================================== */

        "react/react-in-jsx-scope": "off", // React 17+
        "react/jsx-uses-react": "off",

        "react/function-component-definition": [
            "error",
            {
                namedComponents: "function-declaration",
                unnamedComponents: "arrow-function",
            },
        ],

        /* ======================================================
         * Geral
         * ===================================================== */

        "prefer-const": "error",
        "no-console": ["warn", { allow: ["warn", "error"] }],
    },

    overrides: [
        {
            files: ["*.stories.tsx", "*.stories.ts"],
            rules: {
                "react/function-component-definition": "off",
            },
        },
    ],
};
