<template>
  <div class="clr-readability">
    <div
      :class="['clr-readability__grids', rounded && 'is-rounded']"
      :style="{ backgroundColor: hex }"
    >
      <div
        v-for="(result, theme) in readabilityTestResult"
        :key="theme"
        :class="`clr-readability__grid is-${theme.toLowerCase()}`"
      >
        <div v-for="(passed, fontSize) in result" :key="`${theme}:${fontSize}`">
          <span
            class="clr-readability__targeted-font"
            :style="{ fontSize: `${fontSize}px` }"
            >A</span
          >
          <label class="clr-readability__value">
            <slot :name="`case-${theme}-${fontSize}`">
              {{ formatTestResult(passed) }}
            </slot>
          </label>
        </div>
      </div>
    </div>
    <div class="clr-readability__info">
      <div>
        <label>Nama</label>
        <p>{{ variantName }}</p>
      </div>
      <div>
        <label>Hex</label>
        <p>{{ hex }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import _get from 'lodash/get'
import _isBool from 'lodash/isBoolean'
import { ColorVariant } from '../../../../config/colors/model'

export default {
  props: {
    colorVariant: {
      type: ColorVariant,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    variantName() {
      if (this.colorVariant instanceof ColorVariant) {
        return this.colorVariant.variantName
      }
      return null
    },
    hex() {
      if (this.colorVariant instanceof ColorVariant) {
        return this.colorVariant.hex
      }
      return null
    },
    readabilityTestResult() {
      if (this.colorVariant instanceof ColorVariant) {
        return this.colorVariant.readabilityTestResult
      }
      return null
    },
  },
  methods: {
    formatTestResult(passed) {
      if (_isBool(passed)) {
        return passed ? 'Pass' : 'Fail'
      }
      return '(?)'
    },
  },
}
</script>

<style lang="scss" scoped>
.clr-readability {
  display: inline-block;
  border-radius: 0.5rem;

  &__grids {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;

    &.is-rounded {
      border-radius: 8px;
    }
  }

  &__grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  &__targeted-font {
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
    border: 1px solid rgba(0, 0, 0, 0.1);
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

.clr-readability__grid {
  &.is-dark {
    .clr-readability__targeted-font {
      color: #212121;
    }
    .clr-readability__value {
      background-color: #212121;
      color: white;
    }
  }

  &.is-light {
    .clr-readability__targeted-font {
      color: white;
    }
    .clr-readability__value {
      color: #212121;
      background-color: white;
    }
  }
}
</style>
