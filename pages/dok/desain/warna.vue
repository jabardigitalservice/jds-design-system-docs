<template>
  <div>
    <div
      v-for="({ variants, mainVariant: mainVariantKey }, colorName) in colors"
      :key="colorName"
      class="color-row"
    >
      <JDSCard flat>
        <ReadabilityTest
          :color-name="colorName"
          :hex="variants[mainVariantKey].hex"
          :test-result="rTest[colorName][mainVariantKey]"
        />
      </JDSCard>
      <ColorPaletteList
        :variants="variants"
        :main-variant-key="mainVariantKey"
        :readability-test-results="rTest[colorName]"
      />
    </div>
  </div>
</template>

<script>
import colors from '../../../assets/colors'
import rTest from '../../../assets/colors/readability-test'

export default {
  name: 'Warna',
  components: {
    JDSCard: () => import('../../../components/@JDS/Card'),
    ReadabilityTest: () =>
      import('../../../components/@Docs/Colors/ReadabilityTest'),
    ColorPaletteList: () =>
      import('../../../components/@Docs/Colors/Palette/List'),
  },
  nuxtI18n: {
    paths: {
      en: '/colors',
    },
  },
  data() {
    return {
      colors,
      rTest,
    }
  },
}
</script>

<style lang="scss" scoped>
.color-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
