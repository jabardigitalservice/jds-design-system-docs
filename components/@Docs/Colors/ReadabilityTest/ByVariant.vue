<template>
  <ReadabilityTest
    v-if="hasRequiredProps"
    v-bind="{ colorName, hex, testResult, ...$attrs }"
  />
</template>

<script>
import _get from 'lodash/get'
import ReadabilityTest from './index'
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
  data() {
    return {
      hex: null,
      testResult: null,
    }
  },
  computed: {
    hasRequiredProps() {
      return [this.colorName, this.variant, this.hex, this.testResult].every(
        (value) => !!value
      )
    },
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler({ colorName, variant }) {
        if (!colorName || !variant) {
          return
        }
        this.loadHex(colorName, variant)
        this.loadReadabilityTestResult(colorName, variant)
      },
    },
  },
  methods: {
    async loadHex(colorName, variant) {
      const colors = await import(
        '../../../../assets/colors/index.json'
      ).then((m) => (m ? m.default || m : null))

      if (!colors) {
        return
      }
      this.hex = _get(colors, `${colorName}.variants.${variant}.hex`)
    },
    async loadReadabilityTestResult(colorName, variant) {
      const testResult = await import(
        '../../../../assets/colors/readability-test'
      ).then((m) => (m ? m.default || m : null))

      if (!testResult) {
        return
      }
      this.testResult = testResult[colorName][variant]
    },
  },
}
</script>
