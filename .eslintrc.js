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
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'object-curly-newline': ['error', { consistent: true }],
    'import/no-cycle': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': { node: { moduleDirectory: ['node_modules', 'src/'] } },
  },
};
