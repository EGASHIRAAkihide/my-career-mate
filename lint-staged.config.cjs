// lint-staged.config.cjs
module.exports = {
  "**/*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"]
};