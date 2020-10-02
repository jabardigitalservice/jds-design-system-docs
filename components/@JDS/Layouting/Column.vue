<template>
  <component :is="tag" :class="['jds-col', classList]">
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
  const className = propName.startsWith('col')
    ? _kebabCase(propName)
    : `col-${_kebabCase(propName)}`
  // TODO: css prefix dibuat constant
  return `jds-${className}--${value}`
}

const columnProps = makeProps('col', () => ({
  type: [Boolean, String, Number],
  default: null,
}))

const offsetProps = makeProps('offset', () => ({
  type: String,
  default: null,
}))

const orderProps = makeProps('order', () => ({
  type: String,
  default: null,
}))

const propsMap = {
  column: {
    propNames: Object.keys(columnProps),
  },
  offset: {
    propNames: Object.keys(offsetProps),
  },
  order: {
    propNames: Object.keys(orderProps),
  },
}

export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    ...columnProps,
    ...offsetProps,
    ...orderProps,
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
      return classList
    },
  },
}
</script>
