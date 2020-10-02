<template>
  <component :is="tag" :class="['jds-row', classList]">
    <slot></slot>
  </component>
</template>

<script>
import _upperFirst from 'lodash/upperFirst'
import _kebabCase from 'lodash/kebabCase'

// TODO: jadi constant
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix] = def()
    props[prefix + _upperFirst(val)] = def()
    return props
  }, {})
}

function makeClassName(propName, value) {
  if (!value) {
    return null
  }
  const className = _kebabCase(propName)
  // TODO: css prefix dibuat constant
  return `jds-row-${className}--${value}`
}

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
}))

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
}))

const propsMap = {
  align: {
    propNames: Object.keys(alignProps),
  },
  justify: {
    propNames: Object.keys(justifyProps),
  },
}

export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    noWrap: {
      type: Boolean,
      default: false,
    },
    padded: {
      type: Boolean,
      default: false,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
    ...justifyProps,
    ...alignProps,
  },
  computed: {
    classList() {
      const classList = []
      for (const type in propsMap) {
        const obj = propsMap[type]
        if (!obj || !obj.propNames) {
          continue
        }
        obj.propNames.forEach((name) => {
          const value = this.$props[name]
          const className = makeClassName(name, value)
          className && classList.push(className)
        })
      }
      if (this.noWrap) {
        classList.push('jds-row--no-wrap')
      }
      if (this.padded) {
        classList.push('jds-row--padded')
      }
      if (this.noGutters) {
        classList.push('jds-row--no-gutters')
      }
      return classList
    },
  },
}
</script>

<style lang="scss" scoped>
.jds-row {
  display: flex;
}
</style>
