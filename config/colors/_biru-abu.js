import { createColorConfig, ColorVariant } from './model'

const colorName = 'BiruAbu'
const mainVariantName = '900'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#E3E7ED').withReadabilityTestResult({
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
  new ColorVariant('100', '#B9C3D3'),
  new ColorVariant('200', '#8D9DB5'),
  new ColorVariant('300', '#627798'),
  new ColorVariant('400', '#415C84'),
  new ColorVariant('500', '#1A4373'),
  new ColorVariant('600', '#133C6B'),
  new ColorVariant('700', '#083461'),
  new ColorVariant('800', '#022B55'),
  new ColorVariant('900', '#001B3D')
).setMainColorVariant(mainVariantName)
