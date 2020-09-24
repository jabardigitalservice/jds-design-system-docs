<template>
  <i :class="['jds-icon-placeholder', sizeClass, dark && 'is-dark']"></i>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: null,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizeClass() {
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(this.size)) {
        return `is-size-${this.size}`
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin size-mixin($size) {
  width: $size;
  height: $size;
}
.jds-icon-placeholder {
  color: #333;
  display: inline-block;
  border-width: 2px;
  border-style: solid;
  border-color: currentColor;
  @include size-mixin(1rem);

  &.is-dark {
    color: white;
  }

  &.is-size {
    &-xs {
      @include size-mixin(0.75rem);
    }

    &-sm {
      @include size-mixin(1rem);
    }

    &-md {
      @include size-mixin(1.5rem);
    }

    &-lg {
      @include size-mixin(2rem);
    }

    &-xl {
      @include size-mixin(3rem);
    }
  }
}
</style>
