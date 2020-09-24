<template>
  <JDSCard
    flat
    block
    :class="[
      'opinionated-example-card',
      good && 'is-good',
      bad && 'is-bad',
      warned && 'is-warned',
    ]"
  >
    <div class="opinionated-example-card__illust">
      <slot name="example"></slot>
    </div>
    <div class="opinionated-example-card__desc">
      <IconPlaceholder style="margin-right: 1rem; flex: none" />
      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </JDSCard>
</template>

<script>
import IconPlaceholder from '../../@JDS/IconPlaceholder'
import JDSCard from '../../@JDS/Card'
export default {
  components: {
    JDSCard,
    IconPlaceholder,
  },
  props: {
    good: {
      type: Boolean,
    },
    bad: {
      type: Boolean,
    },
    warned: {
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/stylesheet/jds-design-system/variables/colors';

.opinionated-example-card {
  height: 100%;
  display: flex !important;
  flex-flow: column;

  &__illust {
    flex: none;
    padding: 1.5rem;
    background-color: colors.$abu-200;
  }

  &__desc {
    flex: 1 1 100%;
    display: flex;
    align-items: baseline;
    padding: 1.5rem;
    border-top-width: 3px !important;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    font-size: 14px;
    color: colors.$abu-800;
  }

  &.is-good {
    .opinionated-example-card__desc {
      border: 1px solid colors.$hijau-600;
    }
  }

  &.is-bad {
    .opinionated-example-card__desc {
      border: 1px solid colors.$merah-600;
    }
  }

  &.is-warned {
    .opinionated-example-card__desc {
      border: 1px solid colors.$kuning-800;
    }
  }
}
</style>
