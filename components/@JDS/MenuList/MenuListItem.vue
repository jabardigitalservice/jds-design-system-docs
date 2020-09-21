<template>
  <div
    :class="['jds-menu-list-item', isNuxtLinkActive && 'is-active']"
    @click.capture="onClick"
    @keydown.space.capture="onClick"
  >
    <span v-if="$slots.icon" class="jds-menu-list-item__icon">
      <slot name="icon"></slot>
    </span>
    <component
      :is="itemComponent"
      v-bind="itemComponentProps"
      tabindex="0"
      class="jds-menu-list-item__label"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: {
    listGroup: {
      from: 'listGroup',
      default: null,
    },
  },
  props: {
    exact: {
      type: Boolean,
    },
    exactActiveClass: {
      type: String,
      default: '',
    },
    activeClass: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    href: {
      type: [String, Object],
      default: null,
    },
    to: {
      type: [String, Object],
      default: null,
    },
    target: {
      type: String,
      default: '_blank',
    },
    tag: {
      type: String,
      default: 'a',
    },
  },
  computed: {
    hasHref() {
      return !!this.href
    },
    hasRouterTo() {
      return !!this.to
    },
    itemComponent() {
      if (this.hasRouterTo && this.hasHref) {
        return null
      }
      if (this.hasRouterTo) {
        return 'nuxt-link'
      }
      if (this.hasHref) {
        return 'a'
      }
      return 'span'
    },
    isNuxtLink() {
      return this.itemComponent === 'nuxt-link'
    },
    isAnchor() {
      return this.itemComponent === 'a'
    },
    itemComponentProps() {
      const {
        exact,
        exactActiveClass,
        activeClass,
        to,
        disabled,
        href,
        target,
        tag,
      } = this
      if (this.isNuxtLink) {
        return { exact, exactActiveClass, activeClass, to, disabled, tag }
      } else if (this.isAnchor) {
        return { disabled, href, target }
      }
      return {}
    },
    isNuxtLinkActive() {
      if (!this.isNuxtLink) {
        return false
      }
      return this.exact
        ? this.$route.path === this.to
        : this.$route.path.startsWith(this.to)
    },
  },
  created() {
    this.preventBothHrefAndToAssignment()
  },
  methods: {
    preventBothHrefAndToAssignment() {
      this.$watch(
        function () {
          return [this.hasRouterTo, this.hasHref]
        },
        function (arr) {
          if (arr.every((x) => x)) {
            throw new Error(
              new Error(`href and to can't be assigned simultaneously`)
            )
          }
        },
        { immediate: true, deep: true }
      )
    },
    onClick() {
      this.$emit('click')
      if (this.isNuxtLink) {
        this.$router.push(this.to)
      } else if (this.isAnchor) {
        window.open(this.href, this.target)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$--item-height: 1.25rem;
$--item-margin-y: 1.5rem;

.jds-menu-list-item {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &.is-active {
    font-weight: bold;
  }

  & + & {
    margin-top: 1.5rem;
  }

  &__icon {
    line-height: 1;
    // position: absolute;
  }

  &__icon + &__label {
    margin-left: 1rem;
  }

  &__label {
    cursor: pointer;
    flex: 0 0 auto;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;

    &:focus,
    &:hover {
      outline: none;
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}

.jds-menu-list-item {
  position: relative;
  height: $--item-height;
  padding-left: 1.75rem;
  margin-top: $--item-margin-y;

  &:first-child {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: $--item-margin-y;
  }

  &.is-active::after {
    display: inline-block;
  }

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.25rem;
    min-width: 4px;
  }

  &::before {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &::after {
    display: none;
    background-color: white;
    border-radius: 9999px;
  }
}

.jds-menu-list-item + .jds-menu-list-item {
  &::before {
    top: -1.5rem;
  }
}
</style>
