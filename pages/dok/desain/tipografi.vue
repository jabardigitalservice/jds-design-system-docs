<template>
  <div>
    <NuxtContent class="docs-markdown-content" :document="content" />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components  */
export default {
  name: 'Warna',
  components: {},
  nuxtI18n: {
    paths: {
      en: '/docs/design/typography',
    },
  },
  data() {
    return {
      content: null,
    }
  },
  async created() {
    this.content = await this.$content('desain/tipografi').fetch()
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
