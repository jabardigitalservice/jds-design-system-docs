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

    <!-- TEMPLATING PER COLUMN -->
    <template v-slot:column-name="{ value: colorName, row }">
      <div class="clr-table-of-usages__clr-name">
        <i class="clr-dot" :style="{ backgroundColor: row.hex }"></i>
        <span>
          {{ colorName }}
        </span>
      </div>
    </template>
    <template v-slot:column-mainUsage="{ value: usages }">
      <ul>
        <li v-for="(u, i) in usages" :key="i">
          {{ u }}
        </li>
      </ul>
    </template>
    <template v-slot:column-alternativeUsage="{ value: usages }">
      <ul>
        <li v-for="(u, i) in usages" :key="i">
          {{ u }}
        </li>
      </ul>
    </template>
    <template v-slot:column-hex="{ value: hex }">
      <div class="clr-table-of-usages__hex">
        <span>
          {{ hex }}
        </span>
        <IconPlaceholder />
      </div>
    </template>
  </DocsTable>
</template>

<script>
import IconPlaceholder from '../../../../components/@JDS/IconPlaceholder'
import { ColorConfig, ColorVariant } from '../../../../config/colors/model'
import colors from '../../../../config/colors'
import DocsTable from '../../Table'

export default {
  components: {
    DocsTable,
    IconPlaceholder,
  },
  data() {
    return {
      colors: Object.freeze(colors),
      tableColumns: [
        {
          header: 'Nama Warna',
          prop: 'name',
        },
        {
          header: 'Penggunaan Utama',
          prop: 'mainUsage',
        },
        {
          header: 'Penggunaan Alternatif',
          prop: 'alternativeUsage',
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
      const colorsToUse = {
        Abu: ['900', '800', '600', '500', '400', '300'],
        BiruAbu: ['900', '700'],
        Hijau: ['600', '700', '800'],
        Biru: ['600', '800'],
        Ungu: ['700'],
        Merah: ['900', '700'],
        Kuning: ['700'],
      }
      const data = []
      Object.entries(colorsToUse).forEach(([colorName, variants]) => {
        const config = colors[colorName]
        if (config instanceof ColorConfig) {
          Object.values(colorsToUse[colorName]).forEach((v) => {
            const variant = config.getColorVariant(v)
            if (variant instanceof ColorVariant) {
              data.push({
                name: `${colorName}${variant.variantName}`,
                mainUsage: variant.usages.main,
                alternativeUsage: variant.usages.alternative,
                hex: variant.hex,
              })
            }
          })
        }
      })
      return data
    },
  },
}
</script>

<style lang="scss" scoped>
.clr-table-of-usages {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
