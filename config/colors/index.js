import { ColorConfig } from './model'
const ctx = require.context('./', false, /^\.\/_.*\.js$/)

const colors = {}
ctx.keys().forEach((path) => {
  const m = ctx(path)
  const config = m ? m.default || m : null
  if (config && config instanceof ColorConfig) {
    colors[config.colorName] = config
  }
})
export default colors
