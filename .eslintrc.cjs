module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript or other typing
    'react-hooks/rules-of-hooks': 'error', // Checks rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'jsx-a11y/anchor-is-valid': 'warn', // Accessibility for anchors
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console.log but allow warn/error
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused vars except those starting with _
    'prefer-const': 'warn', // Prefer const over let when possible
    'no-var': 'error', // Disallow var
    'eqeqeq': ['error', 'always'], // Require === and !==
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
