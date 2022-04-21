module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'testing-library'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-deprecated': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/no-unknown-property': 'warn',
    'react/require-render-return': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'comma-dangle': ['off', 'never'],
    'arrow-body-style': 'off',
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-unused-vars': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],
    'object-curly-spacing': ['warn', 'always'],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': ['warn', 'always'],
    'default-param-last': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
