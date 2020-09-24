import { createColorConfig, ColorVariant } from './model'

const colorName = 'Pink'
const mainVariantName = '400'

export default createColorConfig(
  colorName,
  new ColorVariant('50', '#FFE6EC').withReadabilityTestResult({
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
  new ColorVariant('100', '#FFBFCF'),
  new ColorVariant('200', '#FF96AF'),
  new ColorVariant('300', '#FF6C8F'),
  new ColorVariant('400', '#FF4D77'),
  new ColorVariant('500', '#FD355F'),
  new ColorVariant('600', '#EC305D'),
  new ColorVariant('700', '#D62A59'),
  new ColorVariant('800', '#C12357'),
  new ColorVariant('900', '#9D1951')
).setMainColorVariant(mainVariantName)
