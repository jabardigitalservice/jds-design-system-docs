<template>
  <div class="clr-readability">
    <div
      :class="['clr-readability__grids', rounded && 'is-rounded']"
      :style="{ backgroundColor: hex }"
    >
      <div
        v-for="(color, colorIndex) in config.colors"
        :key="colorIndex"
        class="clr-readability__grid"
      >
        <div
          v-for="(fontSize, fontSizeIndex) in config.fontSizes"
          :key="fontSizeIndex"
        >
          <span
            class="clr-readability__targeted-font"
            :style="{ fontSize: `${fontSize}px`, color: color.text }"
            >A</span
          >
          <label
            class="clr-readability__value"
            :style="{ backgroundColor: color.text, color: color.label }"
          >
            {{ getContrastTestResult(color.text, fontSize) }}
          </label>
        </div>
      </div>
    </div>
    <div class="clr-readability__info">
      <div>
        <label>Nama</label>
        <p>{{ name }}</p>
      </div>
      <div>
        <label>Hex</label>
        <p>{{ hex }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ColorVariant } from '../../../../config/colors/model'
import ColorContrastChecker from '../../../../lib/color-contrast-checker'

const contrastChecker = new ColorContrastChecker()

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
    return {
      config: {
        fontSizes: [14, 16, 21],
        colors: [
          {
            text: '#FFFFFF',
            label: '#212121',
          },
          {
            text: '#212121',
            label: '#FFFFFF',
          },
        ],
      },
    }
  },
  computed: {
    name() {
      if (this.colorVariant instanceof ColorVariant) {
        const { colorName, variantName } = this.colorVariant
        if (variantName === 'default') {
          return colorName
        }
        return `${colorName}${variantName}`
      }
      return null
    },
    hex() {
      if (this.colorVariant instanceof ColorVariant) {
        return this.colorVariant.hex
      }
      return null
    },
  },
  methods: {
    getContrastTestResult(textColor, fontSize) {
      if (!this.hex) {
        return '?'
      }
      const passed = contrastChecker.isLevelAA(this.hex, textColor, fontSize)
      return passed ? 'Pass' : 'Fail'
    },
  },
}
</script>

<style lang="scss" scoped>
.clr-readability {
  display: block;
  border-radius: 0.5rem;

  &__grids {
    display: grid;
    padding: 1rem;
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    font-size: 0.875rem;

    &.is-rounded {
      border-radius: 8px;
    }
  }

  &__grid {
    width: 100%;
    overflow: hidden;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }

  &__targeted-font {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 21px;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  &__value {
    display: block;
    border-radius: 4px;
    line-height: 2;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: normal;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.875rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    label {
      display: block;
      color: #9e9e9e;
      font-size: 0.875rem;
    }

    p {
      color: #424242;
      font-size: 1rem;
      font-weight: normal;
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
