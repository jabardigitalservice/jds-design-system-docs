import { createColorConfig, ColorVariant } from './model'

const colorName = 'Abu'
const mainVariantName = '900'

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
  new ColorVariant('100', '#F5F5F5'),
  new ColorVariant('200', '#EEEEEE'),
  new ColorVariant('300', '#E0E0E0'),
  new ColorVariant('400', '#BDBDBD'),
  new ColorVariant('500', '#9E9E9E'),
  new ColorVariant('600', '#757575'),
  new ColorVariant('700', '#616161'),
  new ColorVariant('800', '#424242'),
  new ColorVariant('900', '#212121')
    .setMainUsage('Teks judul/title', 'Teks label input')
    .setAlternativeUsage('Di semua tempat yang dibutuhkan')
).setMainColorVariant(mainVariantName)
