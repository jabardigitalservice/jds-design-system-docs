/* eslint-disable no-global-assign */
require = require('esm')(module)
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const requireContext = require('require-context')
const asyncFsWriteFile = promisify(fs.writeFile)

const { ColorConfig, ColorVariant } = require('../../config/colors/model')
const ctx = requireContext('../../config/colors', true, /_.*\.js$/)

async function run() {
  let scss = ``
  const colorConfigs = ctx.keys().map((path) => {
    const m = ctx(path)
    return m ? m.default || m : null
  })
  colorConfigs.forEach((config) => {
    if (config instanceof ColorConfig) {
      Object.entries(config.variants).forEach(([variantName, variant]) => {
        if (variant instanceof ColorVariant) {
          let clr = config.colorName.toLowerCase()
          if (variantName !== 'default') {
            clr += `-${variantName}`.toLowerCase()
          }
          const text = `
            .text-${clr} {
              color: ${variant.hex};
            }
            .background-${clr} {
              background-color: ${variant.hex};
            }
          `
          scss += text
        }
      })
    }
  })
  await asyncFsWriteFile(
    path.resolve(
      __dirname,
      '../../assets/stylesheet/jds-design-system/colors.scss'
    ),
    scss,
    { encoding: 'utf8' }
  )
}

run()
