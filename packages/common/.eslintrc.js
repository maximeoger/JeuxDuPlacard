module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: "6",
    project: ["./tsconfig.json"]
  },
  rules: {
    "import/prefer-default-export": "off"
  }
}