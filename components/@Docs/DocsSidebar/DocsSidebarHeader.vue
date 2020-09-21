<template>
  <div class="app:docs-sidebar-header">
    <div class="app:docs-sidebar-header__logo">
      <i></i>
    </div>
    <div class="app:docs-sidebar-header__title">
      <small style="font-size: smaller"> Jabar Digital Service </small>
      <h1 class="jds-headline-6 jds-font-weight-bold">Desain Sistem</h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app\:docs-sidebar-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  &__logo > i {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    border-radius: 9999px;
  }

  &__title {
    margin-left: 0.75rem;
  }
}
</style>
