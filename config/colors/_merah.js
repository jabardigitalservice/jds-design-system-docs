import { createColorConfig, ColorVariant } from './model'

const colorName = 'Merah'
const mainVariantName = '500'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#FFEBEE'),
  new ColorVariant('100', '#FFCDD2'),
  new ColorVariant('200', '#EF9A9A'),
  new ColorVariant('300', '#E57373'),
  new ColorVariant('400', '#EF5350'),
  new ColorVariant('500', '#F44336'),
  new ColorVariant('600', '#E53935'),
  new ColorVariant('700', '#D32F2F'),
  new ColorVariant('800', '#C62828'),
  new ColorVariant('900', '#B71B1C')
).setMainColorVariant(mainVariantName)
