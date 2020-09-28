<template>
  <div>
    <header>
      <span class="jds-headline-5"> Jabar Digital Service </span>
      <h1 class="jds-headline-3">
        <b style="text-transform: uppercase">
          {{ $t('Desain Sistem') }}
        </b>
      </h1>
      <p>
        adalah standarisasi end-to-end dari designer hingga front end developer
        untuk membuat User Interface yang tidak hanya cantik dan menarik namun
        juga developer-freindly.
      </p>
    </header>
    <br />
    <div
      style="
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        margin: -1rem;
      "
    >
      <div v-for="(c, i) in cards" :key="i" class="app:docs-section-card">
        <i></i>
        <div>
          <label>
            {{ c.title }}
          </label>
          <p v-html="c.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/docs',
    },
  },
  name: 'Dokumentasi',
  data() {
    return {
      cards: [
        {
          title: this.$t('Tipografi'),
          description: `
            Lihat standarisasi penggunaan font dan implementasinya dalam mendesain produk-produk JDS.
          `,
        },
        {
          title: this.$t('Warna'),
          description: `
            Lihat standarisasi penggunaan warna dan implementasinya dalam mendesain produk-produk JDS.
          `,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.app\:docs-section-card {
  margin: 1rem;
  padding: 0.75rem 0;
  padding-left: 2rem;

  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 2rem 0;

  width: 400px;

  border: 1px solid #eeeeee;
  border-radius: 6px;
  box-shadow: 0px 2px 16px rgba(33, 33, 33, 0.08);

  background-color: white;
}
</style>
