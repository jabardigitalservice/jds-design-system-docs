<template>
  <div>
    <div
      v-for="(v, index) in variantsOrder"
      :key="index"
      style="display: inline-block"
    >
      <ListItem
        v-if="variants[v]"
        :hex="variants[v].hex"
        :color-name="v"
        :is-active="variants[v].hex === activePaletteHex"
        :readability-test-result="getTestResult(v)"
        @click="activePaletteHex = variants[v].hex"
      />
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  components: {
    ListItem,
  },
  props: {
    variants: {
      type: Object,
      required: true,
    },
    mainVariantKey: {
      type: String,
      required: true,
    },
    readabilityTestResults: {
      type: Object,
      default: null,
    },
  },
  data() {
    const order = new Array(9)
      .fill(null)
      .map((_, index) => `${(index + 1) * 100}`)
      .reverse()
    order.push('50')

    return {
      variantsOrder: order,
      activePaletteHex: null,
    }
  },
  created() {
    this.activePaletteHex = this.variants[this.mainVariantKey]
      ? this.variants[this.mainVariantKey].hex
      : null
  },
  methods: {
    getTestResult(variant) {
      if (this.readabilityTestResults) {
        return this.readabilityTestResults[variant]
      }
      return null
    },
  },
}
</script>

<style>
/* */
</style>
