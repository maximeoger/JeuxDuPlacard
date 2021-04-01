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
    "import/no-extraneous-dependencies": "off", // Todo: limiter la désactivation de cette règle pour les déclarations d'import du dossier "common" dans les fichiers .ts
    "max-len": [2, { "code": 150 }],
    "no-param-reassign": "off"

  }
}