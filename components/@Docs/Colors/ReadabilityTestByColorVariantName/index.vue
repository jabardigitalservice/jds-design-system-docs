<template>
  <ReadabilityTest :color-variant="colorVariant" />
</template>

<script>
import colors from '../../../../config/colors'
import ReadabilityTest from '../ReadabilityTest'
import { ColorConfig } from '~/config/colors/model'

export default {
  components: {
    ReadabilityTest,
  },
  props: {
    colorName: {
      type: String,
      required: true,
    },
    variant: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    colorVariant() {
      if (this.colorName && this.variant) {
        const config = colors[this.colorName]
        if (config instanceof ColorConfig) {
          return config.getColorVariant(this.variant)
        }
      }
      return null
    },
  },
}
</script>
