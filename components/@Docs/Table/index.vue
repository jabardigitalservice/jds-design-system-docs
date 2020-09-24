<template>
  <table class="docs-table" style="width: 100%">
    <thead class="docs-table__thead">
      <tr class="docs-table__tr">
        <th v-for="(col, i) in columns" :key="i" class="docs-table__th">
          {{ col.header }}
        </th>
      </tr>
    </thead>
    <tbody class="docs-table__tbody">
      <tr
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
        class="docs-table__tr"
      >
        <td
          v-for="(column, columnIndex) in columns"
          :key="columnIndex"
          class="docs-table__td"
        >
          <slot
            :name="`column-${column.prop}`"
            v-bind="{
              row,
              column,
              rowIndex,
              columnIndex,
              value: getCellValue(row, column, rowIndex, columnIndex),
            }"
          >
            {{ getCellValue(row, column, rowIndex, columnIndex) }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import _get from 'lodash/get'
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getCellValue(row, column, rowIndex, columnIndex) {
      if (typeof column.get === 'function') {
        return column.get({ row, column, rowIndex, columnIndex })
      }
      return _get(row, column.prop)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '~/assets/stylesheet/jds-design-system/variables/colors';

.docs-table {
  text-align: left;

  &__title {
    color: colors.$hijau-500;
  }

  &__subtitle {
    font-size: 14px;
    color: colors.$abu-700;
  }

  &__thead {
    .docs-table__th {
      padding: 1rem 1.5rem;
    }
    .docs-table__th:first-child {
      padding-left: 0;
    }

    .docs-table__th:last-child {
      padding-right: 0;
    }
  }

  &__tbody {
    .docs-table__td {
      vertical-align: baseline;
      padding: 1rem 1.5rem;
      border: 1px solid #ddd;
      border: 1px solid #ddd;
    }

    .docs-table__td:first-child {
      padding-left: 0;
      border-left: none;
    }

    .docs-table__td:last-child {
      padding-right: 0;
      border-right: none;
    }

    .docs-table__tr:first-child {
      .docs-table__td {
        border-top: none;
      }
    }

    .docs-table__tr:last-child {
      .docs-table__td {
        border-bottom: none;
      }
    }
  }
}
</style>
