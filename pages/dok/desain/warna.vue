<template>
  <div>
    <NuxtContent :document="content" />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components  */
export default {
  name: 'Warna',
  components: {
    JdsCard: () => import('../../../components/@JDS/Card'),
    ReadabilityTest: () =>
      import(
        '../../../components/@Docs/Colors/ReadabilityTestByColorVariantName'
      ),
    ColorPalette: () =>
      import('../../../components/@Docs/Colors/PaletteByColorName'),
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
