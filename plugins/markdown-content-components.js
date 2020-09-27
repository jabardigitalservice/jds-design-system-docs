import Vue from 'vue'
import Divider from '../components/@Docs/ContentTitleDivider'
import BoxedExample from '../components/@Docs/Example/BoxedExample.vue'
import OpinionatedExample from '../components/@Docs/Example/OpinionatedExample'

import JdsRow from '../components/@JDS/Layouting/Row.vue'
import JdsColumn from '../components/@JDS/Layouting/Column.vue'

const components = {
  BoxedExample,
  OpinionatedExample,
  Divider,
  JdsRow,
  JdsColumn,
}

Object.entries(components).forEach(([name, c]) => Vue.component(name, c))
