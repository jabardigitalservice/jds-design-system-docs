import { createColorConfig, ColorVariant } from './model'

const colorName = 'Putih'
const mainVariantName = 'default'

export default createColorConfig(
  colorName,
  new ColorVariant('default', '#FFFFFF').withReadabilityTestResult({
    light: {
      14: false,
      16: false,
      21: false,
    },
    dark: {
      14: true,
      16: true,
      21: true,
    },
  })
).setMainColorVariant(mainVariantName)
