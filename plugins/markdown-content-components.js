import Vue from 'vue'
import BoxedExample from '../components/@Docs/Example/BoxedExample.vue'
import OpinionatedExample from '../components/@Docs/Example/OpinionatedExample'
import ContentTitleDivider from '../components/@Docs/ContentTitleDivider'

const components = {
  BoxedExample,
  OpinionatedExample,
  ContentTitleDivider,
}

Object.entries(components).forEach(([name, c]) => Vue.component(name, c))
