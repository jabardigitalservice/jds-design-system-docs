<template>
  <div class="app:docs-sidebar">
    <DocsSidebarHeader />
    <DocsSidebarMenu />
  </div>
</template>

<script>
import DocsSidebarHeader from './DocsSidebarHeader'
import DocsSidebarMenu from './DocsSidebarMenu'

export default {
  name: 'DocsSidebar',
  components: {
    DocsSidebarHeader,
    DocsSidebarMenu,
  },
}
</script>

<style lang="scss" scoped>
.app\:docs-sidebar {
  color: white;
}
</style>
