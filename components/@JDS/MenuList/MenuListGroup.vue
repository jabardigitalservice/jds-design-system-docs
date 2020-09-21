<template>
  <div
    :class="[
      'jds-menu-list-group',
      isExpanded && 'is-expanded',
      isActive && 'is-active',
    ]"
  >
    <header
      class="jds-menu-list-group__header"
      @click.capture="onToggled"
      @keydown.space.capture="onToggled"
    >
      <slot name="activator"></slot>
      <IconPlaceholder
        v-if="hasGroupItems"
        class="jds-menu-list-group__icon-activator"
        tabindex="-1"
      />
    </header>
    <div
      v-if="hasGroupItems"
      class="jds-menu-list-group__items"
      :style="{
        maxHeight: isExpanded ? `${expandedHeight}rem` : 0,
        transitionDuration: `${expansionDuration}s`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import IconPlaceholder from '~/components/@JDS/IconPlaceholder'
export default {
  components: {
    IconPlaceholder,
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: null,
      groupItemRemHeight: 1.25,
      groupItemRemMarginY: 1.5,
    }
  },
  computed: {
    groupItemsCount() {
      if (!this.$slots.default) {
        return 0
      }
      return Array.isArray(this.$slots.default) ? this.$slots.default.length : 1
    },
    hasGroupItems() {
      return this.groupItemsCount >= 1
    },
    expandedHeight() {
      if (!this.hasGroupItems) {
        return 0
      }
      const totalHeight = this.groupItemsCount * this.groupItemRemHeight
      const totalMargin = (this.groupItemsCount + 2) * this.groupItemRemMarginY
      return totalHeight + totalMargin
    },
    expansionDuration() {
      if (!this.hasGroupItems) {
        return 0
      }
      return 0.3
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(v) {
        this.isExpanded = v
      },
    },
  },
  methods: {
    onToggled() {
      if (!this.hasGroupItems) {
        return
      }
      this.isExpanded = !this.isExpanded
      this.$emit('change', this.isExpanded)
      this.$emit('update:value', this.isExpanded)
    },
  },
}
</script>

<style lang="scss" scoped>
$--item-height: 1.25rem;
$--item-margin-y: 1.5rem;

.jds-menu-list-group {
  &__header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    &:hover,
    &:focus {
      opacity: 0.5;
      outline: none;
    }
  }

  &__icon-activator {
    flex: 0 0 auto;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
  }

  &__items {
    // margin-top: $--item-margin-y;
    overflow: hidden;
    transition-property: max-height;
    transition-timing-function: ease-in-out;
  }
}

.jds-menu-list-group__header::v-deep {
  > .jds-menu-list-item {
    margin: 0 !important;

    &::before,
    &::after {
      display: none !important;
    }

    > .jds-menu-list-item__icon {
      position: absolute;
      left: -0.75rem;
    }

    > .jds-menu-list-item__icon + .jds-menu-list-item__label {
      margin-left: 0;
    }
  }
}

.jds-menu-list-group.is-expanded {
  .jds-menu-list-group {
    &__icon-activator {
      transform: rotate(180deg);
    }
  }
}
</style>
