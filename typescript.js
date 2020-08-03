module.exports = {
  extends: 'airbnb-typescript/base',
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'new-parens': ['error', 'never'],
  },
}
