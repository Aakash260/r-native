export default {
  // Lint & fix JS/TS files with ESLint
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Format JSON, Markdown, and YAML files
  '**/*.{json,md,yml,yaml}': ['prettier --write'],

  // Lint & fix CSS/SCSS with Stylelint
  '**/*.{css,scss}': ['stylelint --fix', 'prettier --write'],
};
