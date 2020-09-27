import { createColorConfig, ColorVariant } from './model'

const colorName = 'Putih'
const mainVariantName = 'default'

export default createColorConfig(
  colorName,
  new ColorVariant('default', '#FFFFFF')
).setMainColorVariant(mainVariantName)
