<template>
  <div class="app:layout-docs">
    <aside class="app:layout-docs__aside">
      <DocsSidebar />
    </aside>
    <main class="app:layout-docs__main">
      <JDSRow>
        <JDSColumn col-lg="9/12">
          <nuxt-child></nuxt-child>
        </JDSColumn>
        <JDSColumn></JDSColumn>
      </JDSRow>
    </main>
  </div>
</template>

<script>
import JDSRow from '../components/@JDS/Layouting/Row'
import JDSColumn from '../components/@JDS/Layouting/Column'
import DocsSidebar from '../components/@Docs/DocsSidebar'
import ContentTitleDivider from '../components/@Docs/ContentTitleDivider'

export default {
  name: 'Dokumentasi',
  nuxtI18n: {
    paths: {
      en: '/docs',
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ContentTitleDivider,
    DocsSidebar,
    JDSRow,
    JDSColumn,
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/stylesheet/app/_media-query.scss' as media-query;

@include media-query.desktop {
  .app\:layout-docs {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: grid;
    grid-template-columns: 250px 1fr;
    align-items: stretch;

    background-color: #069550;

    &__aside {
      padding: 3rem 0 4rem 1.5rem;
    }

    &__main {
      $--top-gap: 1rem;
      position: relative;
      top: $--top-gap;
      overflow-x: hidden;
      overflow-y: auto;

      width: 100%;
      height: calc(100% - #{$--top-gap});
      padding: 2rem;
      border-top-left-radius: $--top-gap;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);

      background-color: white;
    }
  }
}
</style>

<style lang="scss">
@use '~/assets/stylesheet/app/_media-query.scss' as media-query;

@include media-query.desktop {
  .app\:page-docs {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;

    &__content {
      flex: 0 0 75%;
    }
    &__nav {
      flex: 1 1 auto;
    }
  }
}
</style>
