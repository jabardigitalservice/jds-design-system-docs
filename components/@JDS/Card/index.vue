<template>
  <div
    :class="[
      'jds-card',
      square && 'is-square',
      block && 'is-block',
      borderless && 'is-borderless',
      flat && 'is-flat',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.jds-card {
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);

  &.is-block {
    display: block;
  }

  &.is-square {
    border-radius: 0;
  }

  &.is-borderless {
    border: none;
  }

  &.is-flat {
    box-shadow: none;
  }
}
</style>
