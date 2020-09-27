import { createColorConfig, ColorVariant } from './model'

const colorName = 'Hijau'
const mainVariantName = '600'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#E6F6EC'),
  new ColorVariant('100', '#C3E9D0'),
  new ColorVariant('200', '#9BDBB3'),
  new ColorVariant('300', '#70CD94'),
  new ColorVariant('400', '#4DC27E'),
  new ColorVariant('500', '#1FB767'),
  new ColorVariant('600', '#16A75C'),
  new ColorVariant('700', '#069550'),
  new ColorVariant('800', '#008444'),
  new ColorVariant('900', '#006430')
).setMainColorVariant(mainVariantName)
