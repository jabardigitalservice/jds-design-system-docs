<template functional>
  <div class="boxed-example">
    <h4 v-if="$slots.title" class="boxed-example__title">
      <slot name="title"></slot>
    </h4>
    <p v-if="$slots.subtitle" class="boxed-example__subtitle">
      <slot name="subtitle"></slot>
    </p>
    <div class="boxed-example__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.boxed-example {
  text-align: left;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;

  &__title {
    color: colors.$hijau-500;
  }

  &__subtitle {
    font-size: 14px;
    color: colors.$abu-700;
  }
}
</style>
