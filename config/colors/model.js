const defaultReadabilityTestResult = {
  14: false,
  16: false,
  21: false,
}

export function ColorVariant(variantName, hex) {
  this.variantName = variantName
  this.hex = hex
  this.readabilityTestResult = {
    light: defaultReadabilityTestResult,
    dark: defaultReadabilityTestResult,
  }
  this.usages = {
    main: [],
    alternative: [],
  }
  return this
}

ColorVariant.prototype.withReadabilityTestResult = function ({
  light = defaultReadabilityTestResult,
  dark = defaultReadabilityTestResult,
}) {
  this.readabilityTestResult.light = light
  this.readabilityTestResult.dark = dark
  return this
}

ColorVariant.prototype.setMainUsage = function (...usages) {
  this.usages.main.push(...usages)
  return this
}

ColorVariant.prototype.setAlternativeUsage = function (...usages) {
  this.usages.alternative.push(...usages)
  return this
}

export function ColorConfig(colorName) {
  this.colorName = colorName
  this.mainVariantName = null
  this.variants = {}
  return this
}

ColorConfig.prototype.addColorVariant = function (colorVariant) {
  if (colorVariant instanceof ColorVariant) {
    if (colorVariant.variantName in this.variants) {
      throw new Error(`${colorVariant.variantName} already defined`)
    }
    this.variants[colorVariant.variantName] = colorVariant
    return this
  }
  throw new Error('colorVariant must be an instanceof ColorVariant')
}

ColorConfig.prototype.setMainColorVariant = function (variantName) {
  this.mainVariantName = variantName
  return this
}

ColorConfig.prototype.getMainColorVariant = function (variantName) {
  if (!this.mainVariantName) {
    throw new Error('main variant name has not been set')
  }
  return this.variants[this.mainVariantName]
}

ColorConfig.prototype.getColorVariant = function (variantName) {
  return this.variants[variantName]
}

export function createColorConfig(colorName, ...variants) {
  const config = new ColorConfig(colorName)
  if (Array.isArray(variants) && variants.length) {
    variants.forEach((v) => {
      config.addColorVariant(v)
    })
  }
  return config
}
