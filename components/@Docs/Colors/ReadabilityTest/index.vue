<template>
  <div class="app:clr-read-test">
    <div
      :class="['app:clr-read-test__cases', rounded && 'is-rounded']"
      :style="{ backgroundColor: hex }"
    >
      <div
        v-for="v in textVariants"
        :key="v"
        :class="`app:clr-read-test__case is-${v.toLowerCase()}`"
      >
        <div
          v-for="size in fontSizeTestCases"
          :key="`${v}:${size}`"
          class="app:clr-read-test__case-result"
          :style="{ gridArea: `size-${size}` }"
        >
          <div style="display: inline-block">
            <span
              class="app:clr-read-test__case-result__text"
              :style="{ fontSize: `${size}px` }"
              >A</span
            >
            <label class="app:clr-read-test__case-result__value">
              <slot :name="`case-${v}-${size}`">
                {{ getTestResult(v, size) }}
              </slot>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="app:clr-read-test__info">
      <div>
        <label>Nama</label>
        <p>{{ colorName }}</p>
      </div>
      <div>
        <label>Hex</label>
        <p>{{ hex }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import _get from 'lodash/get'
import _isBool from 'lodash/isBoolean'

const LIGHT = 'light'
const DARK = 'dark'
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    colorName: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      required: true,
    },
    testResult: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      textVariants: [DARK, LIGHT],
      fontSizeTestCases: [14, 16, 21],
    }
  },
  methods: {
    getTestResult(variant, size) {
      if (!this.testResult) {
        return '?'
      }
      const result = _get(this.testResult, `${variant}.${size}`)
      if (_isBool(result)) {
        return result ? 'Pass' : 'Fail'
      }
      return '?'
    },
  },
}
</script>

<style lang="scss" scoped>
.app\:clr-read-test {
  display: inline-block;
  border-radius: 0.5rem;

  &__cases {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;

    &.is-rounded {
      border-radius: 8px;
    }
  }

  &__case {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'size-16 size-14'
      'size-21 empty';
  }

  &__case-result {
    //
    &__text {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      min-height: 21px;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    &__value {
      display: inline-block;
      border-radius: 4px;
      padding: 0 1rem;
      line-height: 2;
      font-size: smaller;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    label {
      color: #9e9e9e;
      font-size: smaller;
    }

    p {
      color: #424242;
    }
  }
}

.app\:clr-read-test__case.is-dark {
  .app\:clr-read-test__case-result {
    &__text {
      color: #212121;
    }

    &__value {
      background-color: #212121;
      color: white;
    }
  }
}

.app\:clr-read-test__case.is-light {
  .app\:clr-read-test__case-result {
    &__text {
      color: white;
    }

    &__value {
      color: #212121;
      background-color: white;
    }
  }
}
</style>
