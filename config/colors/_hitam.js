import { createColorConfig, ColorVariant } from './model'

const colorName = 'Hitam'
const mainVariantName = 'default'

export default createColorConfig(
  colorName,
  new ColorVariant('default', '#000000').withReadabilityTestResult({
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
