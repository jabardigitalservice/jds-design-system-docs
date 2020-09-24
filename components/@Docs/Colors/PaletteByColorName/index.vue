<template>
  <Palette v-if="colorConfig" :color-config="colorConfig" />
</template>

<script>
import Palette from '../Palette'
import colors from '~/config/colors'

export default {
  components: {
    Palette,
  },
  props: {
    colorName: {
      type: String,
      required: true,
    },
  },
  computed: {
    colorConfig() {
      if (this.colorName) {
        return colors[this.colorName]
      }
      return null
    },
  },
}
</script>
