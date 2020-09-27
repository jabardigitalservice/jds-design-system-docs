/* eslint-disable no-global-assign */
require = require('esm')(module)
const requireContext = require('require-context')
const _kebabCase = require('lodash/kebabCase')
const { ColorConfig, ColorVariant } = require('../../config/colors/model')
const { writeSCSS } = require('./write-scss')
const { default: colors } = require('~/config/colors')

const ctx = requireContext('../../config/colors', true, /_.*\.js$/)
const colorConfigs = ctx.keys().map((path) => {
  const m = ctx(path)
  return m ? m.default || m : null
})

function formatColorVariantName(colorVariant) {
  if (colorVariant instanceof ColorVariant) {
    // e.g AbuBiru -> abu-biru
    let clr = _kebabCase(colorVariant.colorName)
    if (colorVariant.variantName !== 'default') {
      // e.g abu-biru-900
      clr += `-${_kebabCase(colorVariant.variantName)}`
    }
    return clr
  }
}

async function run() {
  await writeSCSS({
    outputPath:
      '../../assets/stylesheet/jds-design-system/variables/_colors.scss',
    write: (append) => {
      for (const config of colorConfigs) {
        if (config instanceof ColorConfig) {
          for (const variant of Object.values(config.variants)) {
            if (variant instanceof ColorVariant) {
              const name = formatColorVariantName(variant)
              // $abu-900: #212121 !default;
              append(`$${name}: ${variant.hex} !default;`)
            }
          }
        }
      }
    },
  })

  await writeSCSS({
    dependencies: [
      '../../assets/stylesheet/jds-design-system/variables/_colors.scss',
    ],
    outputPath: '../../assets/stylesheet/jds-design-system/colors.scss',
    write: (append) => {
      for (const config of colorConfigs) {
        if (config instanceof ColorConfig) {
          for (const variant of Object.values(config.variants)) {
            if (variant instanceof ColorVariant) {
              const name = formatColorVariantName(variant)
              // .text-abu-900 {
              //   color: colors.$abu-900;
              // }
              // .background-abu-900 {
              //   background-color: colors.$abu-900;
              // }
              append(`
                .text-${name} {
                  color: colors.$${name};
                }
                .background-${name} {
                  background-color: colors.$${name};
                }
              `)
            }
          }
        }
      }
    },
  })
}

run().catch((e) => console.error(e))
