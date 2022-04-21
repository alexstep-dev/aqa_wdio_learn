module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  plugins: ["wdio", "mocha"],
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:wdio/recommended",
    "plugin:mocha/recommended",
  ],
  rules: {
    "wdio/no-pause": "warn",
    "wdio/no-debug": "warn",
    "wdio/await-expect": "error",
    "mocha/no-skipped-tests": "off",
    "mocha/no-mocha-arrows": "off",
  },
};
