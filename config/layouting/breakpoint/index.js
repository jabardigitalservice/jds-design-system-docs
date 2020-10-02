import { Viewport, Breakpoint } from './model'

export const viewport = (function () {
  const inst = new Viewport()
  inst.addBreakpoint(
    new Breakpoint('xs', 0, 575, 4, 16, 16),
    new Breakpoint('sm', 576, 767, 8, 16, 16),
    new Breakpoint('md', 768, 991, 8, 24, 24),
    new Breakpoint('lg', 992, 1199, 12, 24, 24),
    new Breakpoint('xl', 1200, 9999, 12, 24, 24)
  )
  return inst
})()
