export default {
  // Lint & fix JS/TS files with ESLint
  '**/*.{js,jsx,ts,tsx}': ['npm run lint', 'npm run format:check'],

  // Format JSON, Markdown, and YAML files
  '**/*.{json,md,yml,yaml}': ['npm run format:check'],

  // Lint & fix CSS/SCSS with Stylelint
  '**/*.{css,scss}': ['npm run lint:stylelint', 'npm run format:check'],
};
