import { createColorConfig, ColorVariant } from './model'

const colorName = 'Hitam'
const mainVariantName = 'default'

export default createColorConfig(
  colorName,
  new ColorVariant('default', '#000000')
).setMainColorVariant(mainVariantName)
