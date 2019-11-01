module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/standard",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["standard", "prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
