// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierConfig from '@vue/eslint-config-prettier'
export default withNuxt(
  {
    rules: {
      'no-console': 'off',
    },
  },
  prettierConfig,
)
// Your custom configs here
