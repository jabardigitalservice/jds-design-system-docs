import { createColorConfig, ColorVariant } from './model'

const colorName = 'Ungu'
const mainVariantName = '900'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#F3E5F5').withReadabilityTestResult({
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
  new ColorVariant('100', '#E1BEE7'),
  new ColorVariant('200', '#CE93D8'),
  new ColorVariant('300', '#BA68C8'),
  new ColorVariant('400', '#AB47BC'),
  new ColorVariant('500', '#9B27B0'),
  new ColorVariant('600', '#8D24AA'),
  new ColorVariant('700', '#7A1FA2'),
  new ColorVariant('800', '#691B9A'),
  new ColorVariant('900', '#49148C')
).setMainColorVariant(mainVariantName)
