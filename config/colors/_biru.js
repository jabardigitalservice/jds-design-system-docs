import { createColorConfig, ColorVariant } from './model'

const colorName = 'Biru'
const mainVariantName = '600'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#E3F2FD').withReadabilityTestResult({
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
  new ColorVariant('100', '#BBDEFB'),
  new ColorVariant('200', '#90CAF9'),
  new ColorVariant('300', '#64B5F6'),
  new ColorVariant('400', '#42A5F5'),
  new ColorVariant('500', '#2196F3'),
  new ColorVariant('600', '#1E88E5'),
  new ColorVariant('700', '#1976D2'),
  new ColorVariant('800', '#1565C0'),
  new ColorVariant('900', '#0D47A1')
).setMainColorVariant(mainVariantName)
