/* eslint-disable no-global-assign */
require = require('esm')(module)
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const requireContext = require('require-context')
const asyncMkdir = promisify(fs.mkdir)
const asyncFsWriteFile = promisify(fs.writeFile)
const _kebabCase = require('lodash/kebabCase')

const { ColorConfig, ColorVariant } = require('../../config/colors/model')
const ctx = requireContext('../../config/colors', true, /_.*\.js$/)

async function run() {
  let variables = ``
  let scss = `@use './variables/colors';`

  const colorConfigs = ctx.keys().map((path) => {
    const m = ctx(path)
    return m ? m.default || m : null
  })
  colorConfigs.forEach((config) => {
    if (config instanceof ColorConfig) {
      Object.entries(config.variants).forEach(([variantName, variant]) => {
        if (variant instanceof ColorVariant) {
          let clr = _kebabCase(config.colorName)
          if (variantName !== 'default') {
            clr += `-${_kebabCase(variantName)}`
          }

          const variableName = `$${clr}`
          variables += `${variableName}: ${variant.hex} !default;\n`

          scss += `
            .text-${clr} {
              color: colors.${variableName};
            }
            .background-${clr} {
              background-color: colors.${variableName};
            }
          `
        }
      })
    }
  })
  await asyncMkdir(
    path.resolve(
      __dirname,
      '../../assets/stylesheet/jds-design-system/variables'
    )
  ).catch(() => {})
  await asyncFsWriteFile(
    path.resolve(
      __dirname,
      '../../assets/stylesheet/jds-design-system/variables/_colors.scss'
    ),
    variables,
    { encoding: 'utf8' }
  )
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
