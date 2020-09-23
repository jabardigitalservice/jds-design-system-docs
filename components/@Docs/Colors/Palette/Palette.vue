<template>
  <div>
    <div
      v-for="(variant, name) in colorVariants"
      :key="name"
      style="display: inline-block"
    >
      <PaletteItem
        :color-variant="variant"
        :is-active="name === activePaletteHex"
        @click="activePaletteHex = name"
      />
    </div>
  </div>
</template>

<script>
import { ColorConfig } from '../../../../config/colors/model'
import PaletteItem from './PaletteItem'
export default {
  components: {
    PaletteItem,
  },
  props: {
    colorConfig: {
      type: [ColorConfig],
      default: null,
    },
  },
  data() {
    return {
      activePaletteHex: null,
    }
  },
  computed: {
    colorVariants() {
      if (this.colorConfig instanceof ColorConfig) {
        return this.colorConfig.variants
      }
      return {}
    },
  },
  mounted() {
    if (this.colorConfig instanceof ColorConfig) {
      this.activePaletteHex = this.colorConfig.mainVariantName
    }
  },
}
</script>
