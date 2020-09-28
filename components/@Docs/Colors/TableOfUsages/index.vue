<template>
  <DocsTable
    :columns="tableColumns"
    :data="tableData"
    class="clr-table-of-usages"
  >
    <template #title>
      Daftar penggunaan warna default pada desain UI Produk JDS
    </template>
    <template #subtitle>
      Klik pada kode hexa untuk mengcopy kode warnanya.
    </template>

    <!-- START: TEMPLATING PER COLUMN -->
    <!-- TEMPLATING FOR `name` prop -->
    <template v-slot:column-name="{ value: colorName, row }">
      <div class="clr-table-of-usages__clr-name">
        <i class="clr-dot" :style="{ backgroundColor: row.hex }"></i>
        <span>
          {{ colorName }}
        </span>
      </div>
    </template>

    <!-- TEMPLATING FOR `main` prop -->
    <template v-slot:column-main="{ value: mainUsages }">
      <ul>
        <li v-for="(u, index) in mainUsages" :key="index">
          {{ u }}
        </li>
      </ul>
    </template>

    <!-- TEMPLATING FOR `alt` prop -->
    <template v-slot:column-alt="{ value: altUsages }">
      <ul>
        <li v-for="(u, index) in altUsages" :key="index">
          {{ u }}
        </li>
      </ul>
    </template>

    <!-- TEMPLATING FOR `hex` prop -->
    <template v-slot:column-hex="{ value: hex }">
      <div
        class="clr-table-of-usages__hex"
        @click="onCopyColorToClipboard(hex)"
      >
        <span>
          {{ hex }}
        </span>
        <IconPlaceholder />
      </div>
    </template>
    <!-- END: TEMPLATING PER COLUMN -->
  </DocsTable>
</template>

<script>
import IconPlaceholder from '../../../../components/@JDS/IconPlaceholder'
import { ColorConfig, ColorVariant } from '../../../../config/colors/model'
import colorConfigs from '../../../../config/colors'
import DocsTable from '../../Table'

export default {
  components: {
    DocsTable,
    IconPlaceholder,
  },
  props: {
    usages: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      colorConfigs: Object.freeze(colorConfigs),
      tableColumns: [
        {
          header: 'Nama Warna',
          prop: 'name',
        },
        {
          header: 'Penggunaan Utama',
          prop: 'main',
        },
        {
          header: 'Penggunaan Alternatif',
          prop: 'alt',
        },
        {
          header: 'Kode Hexa',
          prop: 'hex',
        },
      ],
    }
  },
  computed: {
    tableData() {
      if (!this.usages) {
        return []
      }
      const colorNames = Object.keys(this.usages)
      if (!colorNames.length) {
        return []
      }

      const data = []
      for (const colorName of colorNames) {
        const config = this.colorConfigs[colorName]
        if (config instanceof ColorConfig) {
          const colorUsage = this.usages[colorName]
          const variants = Object.keys(colorUsage)

          for (const variantName of Object.values(variants)) {
            const colorVariant = config.getColorVariant(variantName)
            if (colorVariant instanceof ColorVariant) {
              data.push({
                name: `${colorName}${variantName}`,
                hex: colorVariant.hex,
                main: colorUsage[variantName].main,
                alt: colorUsage[variantName].alt,
              })
            }
          }
        }
      }
      return data
    },
  },
  methods: {
    async onCopyColorToClipboard(hex) {
      try {
        if (navigator && navigator.clipboard) {
          await navigator.clipboard.writeText(hex)
          alert(`${hex} copied to clipboard`)
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/stylesheet/jds-design-system/variables/colors';

.clr-table-of-usages {
  * {
    color: colors.$abu-700;
    font-weight: normal;
    font-size: 1rem;
  }

  &__clr-name {
    display: flex;
    align-items: center;

    .clr-dot {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 9999px;
      margin-right: 1rem;
    }
  }
  &__hex {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      margin-right: 1em;
      color: inherit;
    }

    &:hover {
      color: colors.$hijau-700;
    }
  }

  ul {
    margin: 0;
    list-style-type: disc;

    > li + li {
      margin-top: 0;
    }
  }
}
</style>
