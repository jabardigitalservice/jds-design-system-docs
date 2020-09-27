export function ColorVariant(variantName, hex) {
  this.colorName = null
  this.variantName = variantName
  this.hex = hex
  return this
}

ColorVariant.fromJSON = function (json) {
  if (!json || typeof json !== 'object') {
    throw new TypeError('json must a plain object literal')
  }
  const { variantName, hex } = json
  if (!variantName) {
    throw new Error('variantName is required')
  }
  if (!hex) {
    throw new Error('hex is required')
  }
  return new ColorVariant(variantName, hex)
}

export function ColorConfig(colorName) {
  this.colorName = colorName
  this.mainVariantName = null
  this.variants = {}
  return this
}

ColorConfig.prototype.addColorVariant = function (colorName, colorVariant) {
  if (colorVariant instanceof ColorVariant) {
    if (colorVariant.variantName in this.variants) {
      throw new Error(`${colorVariant.variantName} already defined`)
    }
    this.variants[colorVariant.variantName] = Object.assign(colorVariant, {
      colorName,
    })
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

ColorConfig.fromJSON = function (json) {
  if (!json || typeof json !== 'object') {
    throw new TypeError('json must a plain object literal')
  }
  const { colorName, mainVariantName, variants } = json
  if (!colorName) {
    throw new Error(`colorName is required`)
  }
  const config = new ColorConfig(colorName)
  if (mainVariantName) {
    config.setMainColorVariant(mainVariantName)
  }
  if (variants && typeof variants === 'object') {
    for (const v of variants) {
      if (v && typeof v === 'object') {
        const colorVariant = new ColorVariant(v.variantName, v.hex)
        config.addColorVariant(colorVariant)
      }
    }
  }
  return config
}

export function createColorConfig(colorName, ...variants) {
  const config = new ColorConfig(colorName)
  if (Array.isArray(variants) && variants.length) {
    variants.forEach((v) => {
      config.addColorVariant(colorName, v)
    })
  }
  return config
}
