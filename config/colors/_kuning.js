import { createColorConfig, ColorVariant } from './model'

const colorName = 'Kuning'
const mainVariantName = '400'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#FAFAFA').withReadabilityTestResult({
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
  }),
  new ColorVariant('100', '#FFEEB4'),
  new ColorVariant('200', '#FFE483'),
  new ColorVariant('300', '#FFDA4F'),
  new ColorVariant('400', '#FFD206'),
  new ColorVariant('500', '#FFC800'),
  new ColorVariant('600', '#FFB900'),
  new ColorVariant('700', '#FFA600'),
  new ColorVariant('800', '#FF9500'),
  new ColorVariant('900', '#FF7500')
).setMainColorVariant(mainVariantName)
