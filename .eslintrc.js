const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
    'gridsome/require-g-image-src': 'off',
    indent: [
      'error',
      4,
    ],
    semi: [2, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^~', path.resolve(__dirname, './src')]
        ],
        extensions: ['.js', '.vue']
      }
    }
  },
  plugins: [
    'gridsome'
  ]
};
