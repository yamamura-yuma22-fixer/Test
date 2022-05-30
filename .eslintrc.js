module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    // https://github.com/nuxt/typescript/issues/191#issuecomment-561380265
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'standard/computed-property-even-spacing': 0,
    'no-unused-vars': 'off',
    // tsのinterfaceなどでno-unused-varsのエラーが出るため導入
    // 既存の設定と同等にするために、一旦引数のlintを切ってる
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
  }
}
