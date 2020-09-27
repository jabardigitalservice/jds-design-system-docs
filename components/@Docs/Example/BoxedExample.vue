<template>
  <div class="boxed-example">
    <h4 v-if="hasSlot('title')" class="boxed-example__title">
      <slot name="title"></slot>
    </h4>
    <p v-if="hasSlot('subtitle')" class="boxed-example__subtitle">
      <slot name="subtitle"></slot>
    </p>
    <div class="boxed-example__content">
      <slot></slot>
    </div>
    <footer v-if="hasSlot('footer')" class="boxed-example__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    hasSlot(slotName) {
      return (
        slotName in this.$scopedSlots &&
        typeof this.$scopedSlots[slotName] === 'function'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/stylesheet/jds-design-system/variables/colors';
.boxed-example {
  text-align: left;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
}
</style>

<style lang="scss">
@use '~/assets/stylesheet/jds-design-system/variables/colors';
.boxed-example {
  .boxed-example {
    &__title {
      color: colors.$hijau-500;
    }

    &__subtitle {
      font-size: 14px;
      color: colors.$abu-700;
    }

    &__footer {
      font-size: 14px;
      color: colors.$abu-700;
    }
  }
}
</style>
