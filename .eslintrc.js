module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  ignorePatterns: [".eslintrc.js", "babel.config.js", "tsconfig.json"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    semi: "off",
    "@typescript-eslint/semi": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
  },
};
