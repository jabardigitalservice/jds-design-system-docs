const ColorContrastChecker = function () {}

ColorContrastChecker.prototype = {
  fontSize: 14,
  rgbClass: {
    toString() {
      return '<r: ' + this.r + ' g: ' + this.g + ' b: ' + this.b + ' >'
    },
  },
  isValidSixDigitColorCode(hex) {
    const regSixDigitColorcode = /^(#)?([0-9a-fA-F]{6})?$/
    return regSixDigitColorcode.test(hex)
  },
  isValidThreeDigitColorCode(hex) {
    const regThreeDigitColorcode = /^(#)?([0-9a-fA-F]{3})?$/
    return regThreeDigitColorcode.test(hex)
  },
  isValidColorCode(hex) {
    return (
      this.isValidSixDigitColorCode(hex) || this.isValidThreeDigitColorCode(hex)
    )
  },
  isValidRatio(ratio) {
    return typeof ratio === 'number'
  },
  convertColorToSixDigit(hex) {
    return '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  },
  hexToLuminance(color) {
    if (!this.isValidColorCode(color)) {
      throw new Error('Invalid Color :' + color)
    }

    if (this.isValidThreeDigitColorCode(color)) {
      color = this.convertColorToSixDigit(color)
    }

    color = this.getRGBFromHex(color)

    const LRGB = this.calculateLRGB(color)

    return this.calculateLuminance(LRGB)
  },
  check(colorA, colorB, fontSize, customRatio) {
    if (typeof fontSize !== 'undefined') {
      this.fontSize = fontSize
    }

    if (!colorA || !colorB) {
      return false
    }

    const l1 = this.hexToLuminance(colorA) /* higher value */
    const l2 = this.hexToLuminance(colorB) /* lower value */
    const contrastRatio = this.getContrastRatio(l1, l2)

    if (typeof customRatio !== 'undefined') {
      if (!this.isValidRatio(customRatio)) {
        return false
      }
      return this.verifyCustomContrastRatio(contrastRatio, customRatio)
    } else {
      return this.verifyContrastRatio(contrastRatio)
    }
  },
  checkPairs(pairs, customRatio) {
    const results = []

    for (const i in pairs) {
      const pair = pairs[i]
      if (typeof pair.fontSize !== 'undefined') {
        results.push(
          this.check(pair.colorA, pair.colorB, pair.fontSize, customRatio)
        )
      } else {
        results.push(
          this.check(pair.colorA, pair.colorB, undefined, customRatio)
        )
      }
    }
    return results
  },
  calculateLuminance(lRGB) {
    return 0.2126 * lRGB.r + 0.7152 * lRGB.g + 0.0722 * lRGB.b
  },
  isLevelAA(colorA, colorB, fontSize) {
    const result = this.check(colorA, colorB, fontSize)
    return result.WCAG_AA
  },
  isLevelAAA(colorA, colorB, fontSize) {
    const result = this.check(colorA, colorB, fontSize)
    return result.WCAG_AAA
  },
  isLevelCustom(colorA, colorB, ratio) {
    const result = this.check(colorA, colorB, undefined, ratio)
    return result.customRatio
  },
  getRGBFromHex(color) {
    const rgb = Object.create(this.rgbClass)
    if (typeof color !== 'string') {
      throw new TypeError('must use string')
    }

    const rVal = parseInt(color.slice(1, 3), 16)
    const gVal = parseInt(color.slice(3, 5), 16)
    const bVal = parseInt(color.slice(5, 7), 16)

    rgb.r = rVal
    rgb.g = gVal
    rgb.b = bVal

    return rgb
  },
  calculateSRGB(rgb) {
    const sRGB = Object.create(this.rgbClass)
    let key

    for (key in rgb) {
      if (key in rgb) {
        sRGB[key] = parseFloat(rgb[key] / 255, 10)
      }
    }

    return sRGB
  },
  calculateLRGB(rgb) {
    const sRGB = this.calculateSRGB(rgb)
    const lRGB = Object.create(this.rgbClass)
    let key
    let val = 0

    for (key in sRGB) {
      if (key in sRGB) {
        val = parseFloat(sRGB[key], 10)
        if (val <= 0.03928) {
          lRGB[key] = val / 12.92
        } else {
          lRGB[key] = Math.pow((val + 0.055) / 1.055, 2.4)
        }
      }
    }

    return lRGB
  },
  getContrastRatio(lumA, lumB) {
    let lighter, darker

    if (lumA >= lumB) {
      lighter = lumA
      darker = lumB
    } else {
      lighter = lumB
      darker = lumA
    }

    const ratio = (lighter + 0.05) / (darker + 0.05)
    return ratio
  },
  verifyContrastRatio(ratio) {
    const resultsClass = {
      toString() {
        return (
          '< WCAG-AA: ' +
          (this.WCAG_AA ? 'pass' : 'fail') +
          ' WCAG-AAA: ' +
          (this.WCAG_AAA ? 'pass' : 'fail') +
          ' >'
        )
      },
    }
    const WCAG_REQ_RATIO_AA_LG = 3.0
    const WCAG_REQ_RATIO_AA_SM = 4.5
    const WCAG_REQ_RATIO_AAA_LG = 4.5
    const WCAG_REQ_RATIO_AAA_SM = 7.0
    const WCAG_FONT_CUTOFF = 18

    const results = Object.create(resultsClass)
    const fontSize = this.fontSize || 14

    if (fontSize >= WCAG_FONT_CUTOFF) {
      results.WCAG_AA = ratio >= WCAG_REQ_RATIO_AA_LG
      results.WCAG_AAA = ratio >= WCAG_REQ_RATIO_AAA_LG
    } else {
      results.WCAG_AA = ratio >= WCAG_REQ_RATIO_AA_SM
      results.WCAG_AAA = ratio >= WCAG_REQ_RATIO_AAA_SM
    }

    return results
  },
  verifyCustomContrastRatio(inputRatio, checkRatio) {
    const resultsClass = {
      toString() {
        return '< Custom Ratio: ' + (this.customRatio ? 'pass' : 'fail') + '  >'
      },
    }

    const results = Object.create(resultsClass)

    results.customRatio = inputRatio >= checkRatio
    return results
  },
}

export default ColorContrastChecker
