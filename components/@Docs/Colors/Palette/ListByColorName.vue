<template>
  <ColorPaletteList
    v-if="hasRequiredProps"
    :color-name="colorName"
    :variants="variants"
    :main-variant-key="mainVariantKey"
    :readability-test-results="testResults"
  />
</template>

<script>
import _get from 'lodash/get'
import ColorPaletteList from './List'
export default {
  components: {
    ColorPaletteList,
  },
  props: {
    colorName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mainVariantKey: null,
      testResults: null,
      variants: null,
    }
  },
  computed: {
    hasRequiredProps() {
      return [
        this.colorName,
        this.variants,
        this.mainVariantKey,
        this.testResults,
      ].every((value) => !!value)
    },
  },
  watch: {
    colorName: {
      immediate: true,
      handler(v) {
        if (v) {
          this.loadColors(v)
          this.loadReadabilityTestResults(v)
        }
      },
    },
  },
  methods: {
    async loadColors(colorName) {
      const colors = await import(
        '../../../../assets/colors/index.json'
      ).then((m) => (m ? m.default || m : null))

      if (!colors) {
        return
      }
      this.mainVariantKey = _get(colors, `${colorName}.mainVariant`)
      this.variants = _get(colors, `${colorName}.variants`)
    },
    async loadReadabilityTestResults(colorName) {
      const testResults = await import(
        '../../../../assets/colors/readability-test'
      ).then((m) => (m ? m.default || m : null))

      if (!testResults) {
        return
      }
      this.testResults = testResults[colorName]
    },
  },
}
</script>
