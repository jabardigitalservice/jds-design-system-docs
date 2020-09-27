const { promisify } = require('util')
const path = require('path')
const asyncMkdir = promisify(require('fs').mkdir)
const asyncWriteFile = promisify(require('fs').writeFile)
const prettier = require('prettier')

/**
 * @typedef {[string, { as: string }]} SCSSDep
 * @property {string} 0 - path
 * @property {object} 1
 * as - dependency alias in '@use' at-rule.
 */

/**
 * @typedef {function} WriteSCSSHandler
 * @param {function} append - append string into file
 */

/**
 * @typedef WriteSCSSOption
 * @type {object}
 * @property {string[]|SCSSDep[]} dependencies - SCSS file that will be imported on top of this file
 * @property {string} outputPath - output file path
 * @property {string|WriteSCSSHandler} write
 */

/**
 * @function writeSCSS
 * @param {WriteSCSSOption} option - {@link WriteSCSSOption}
 * @return {Promise}
 */
async function writeSCSS(option) {
  let scss = ''
  let absOutputPath = null
  const append = (string) => (scss += `${string}\n`)

  const { dependencies, outputPath, write } = option

  if (!outputPath) {
    return
  } else {
    absOutputPath = path.resolve(__dirname, outputPath)
  }

  if (Array.isArray(dependencies) && dependencies.length) {
    for (const dep of dependencies) {
      let depPath
      let depAlias
      if (typeof dep === 'string' && dep.length) {
        depPath = dep
      } else if (Array.isArray(dep) && dep.length) {
        depPath = dep[0]
        depAlias = dep[1] ? dep[1].as : null
      }
      const absDepPath = path.resolve(__dirname, depPath)
      const relDepPath = path.relative(path.dirname(absOutputPath), absDepPath)
      if (depAlias) {
        append(`@use '${relDepPath}' as ${depAlias};\n`)
      } else {
        append(`@use '${relDepPath}';\n`)
      }
    }
  }

  if (typeof write === 'string') {
    scss = write
  } else if (typeof write === 'function') {
    write(append)
  }

  if (scss.length) {
    await asyncMkdir(path.dirname(absOutputPath), { recursive: true })
    await asyncWriteFile(
      absOutputPath,
      prettier.format(scss, {
        semi: true,
        parser: 'scss',
      }),
      { encoding: 'utf8' }
    )
  }
}

module.exports = {
  writeSCSS,
}
