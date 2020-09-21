<template>
  <div>
    <NuxtContent :document="content" />
    <!-- <div
      v-for="({ variants, mainVariant: mainVariantKey }, colorName) in colors"
      :key="colorName"
      class="color-row"
    >
      <JDSCard flat>
        <ReadabilityTest
          :rounded="false"
          :color-name="`${colorName}${mainVariantKey}`"
          :hex="variants[mainVariantKey].hex"
          :test-result="rTest[colorName][mainVariantKey]"
        />
      </JDSCard>
      <ColorPaletteList
        :color-name="colorName"
        :variants="variants"
        :main-variant-key="mainVariantKey"
        :readability-test-results="rTest[colorName]"
      />
    </div> -->
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components  */
export default {
  name: 'Warna',
  components: {
    JdsCard: () => import('../../../components/@JDS/Card'),
    ReadabilityTest: () =>
      import('../../../components/@Docs/Colors/ReadabilityTest'),
    ReadabilityTestByVariant: () =>
      import('../../../components/@Docs/Colors/ReadabilityTest/ByVariant'),
    ColorPaletteListByColorName: () =>
      import('../../../components/@Docs/Colors/Palette/ListByColorName'),
  },
  nuxtI18n: {
    paths: {
      en: '/colors',
    },
  },
  data() {
    return {
      content: null,
    }
  },
  async created() {
    this.content = await this.$content('desain/warna').fetch()
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
