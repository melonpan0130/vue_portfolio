module.exports = {
  extends: ['vue', 'standard', 'plugin:vue/recommended'],
  plugins: ['import', 'vue'],
  rules: {
    indent: ['error', 2],
    semi: 0,
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'comma-dangle': 0,
    'vue/html-indent': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/require-prop-types': 0,
  },
};