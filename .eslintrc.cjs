module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', "simple-import-sort"],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error"
  },
  settings:{
    react: {
      version: "detect"
    }
  }
}
