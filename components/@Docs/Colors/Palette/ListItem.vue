<template>
  <div class="app:color-palette-list-item">
    <div
      :class="['app:color-palette-list-item__box', mIsActive && 'is-active']"
      :style="{ backgroundColor: hex }"
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <i></i>
    </div>
    <label class="app:color-palette-list-item__name">
      {{ colorName }}
    </label>
    <div v-show="showPopover" class="app:color-palette-list-item__popover">
      <JDSCard borderless style="padding: 1rem; background-color: white">
        <ReadabilityTest
          v-bind="{ colorName, hex, testResult: readabilityTestResult }"
        />
      </JDSCard>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    JDSCard: () => import('../../../@JDS/Card'),
    ReadabilityTest: () => import('../ReadabilityTest'),
  },
  props: {
    hex: {
      type: String,
      required: true,
    },
    colorName: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    readabilityTestResult: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showPopover: false,
      mIsActive: false,
    }
  },
  watch: {
    isActive: {
      immediate: true,
      handler(v) {
        this.mIsActive = v
      },
    },
  },
  methods: {
    onClick() {
      this.mIsActive = true
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
.app\:color-palette-list-item {
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
