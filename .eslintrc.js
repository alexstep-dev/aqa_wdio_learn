module.exports = {
  env: {
    // "browser": true,
    node: true,
    mocha: true,
  },
  plugins: ["mocha"],
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:wdio/recommended",
    "plugin:mocha/recommended",
  ],
  rules: {
    "wdio/no-pause": 0, // off
    "wdio/no-debug": 0, // warn
    "wdio/await-expect": 0, // error

    "mocha/no-skipped-tests": "off",
  },
};
