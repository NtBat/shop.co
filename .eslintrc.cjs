module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        bracketSameLine: true,
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        endOfLine: "auto",
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
      },
    ],
  },
};
