module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'airbnb'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': { node: { moduleDirectory: ['node_modules', 'src/'] } },
  },
};
