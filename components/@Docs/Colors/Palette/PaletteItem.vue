<template>
  <div class="clr-palette-item">
    <template v-if="colorVariant">
      <div
        :class="['clr-palette-item__box', isActive && 'is-active']"
        :style="{ backgroundColor: colorVariant.hex }"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <i></i>
      </div>
      <label class="clr-palette-item__name">
        {{ colorVariant.variantName }}
      </label>
      <div v-show="showPopover" class="clr-palette-item__popover">
        <JDSCard style="padding: 1rem; background-color: white">
          <ReadabilityTest v-bind="{ colorVariant }" />
        </JDSCard>
      </div>
    </template>
  </div>
</template>

<script>
import { ColorVariant } from '~/config/colors/model'
export default {
  components: {
    JDSCard: () => import('../../../@JDS/Card'),
    ReadabilityTest: () => import('../ReadabilityTest'),
  },
  props: {
    colorVariant: {
      type: ColorVariant,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPopover: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
    onMouseEnter() {
      if (this.showPopover) return
      this.showPopover = true
    },
    onMouseLeave() {
      this.showPopover = false
    },
  },
}
</script>

<style lang="scss" scoped>
.clr-palette-item {
  position: relative;

  &__box {
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border-radius: 0px;
    will-change: border-radius;
    transition: border-radius 0.3s ease-out;

    > i {
      position: absolute;
      display: none;
      border-radius: 100%;
      height: 40%;
      width: 40%;
      background-color: white;
    }

    &.is-static {
      transition: none;
    }

    &:not(.is-static) {
      &.is-active {
        border-radius: 100%;
        > i {
          display: block;
        }
      }
    }
  }

  &__name {
    display: block;
    text-align: center;
  }

  &__popover {
    z-index: 50;
    position: absolute;
  }
}
</style>
