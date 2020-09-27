import { Viewport, Breakpoint } from './model'

export const viewport = (function () {
  const inst = new Viewport()
  inst.addBreakpoint(
    new Breakpoint('xs', 0, 599, 4, 16, 16),
    new Breakpoint('sm', 600, 719, 8, 16, 16),
    new Breakpoint('md', 720, 834, 8, 24, 24),
    new Breakpoint('lg', 835, 9999, 12, 24, 24)
  )
  return inst
})()
