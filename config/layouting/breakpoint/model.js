import _orderBy from 'lodash/orderBy'

export function Breakpoint(
  name,
  minimumWindowWidthInPx,
  maximumWindowWidthInPx,
  numOfColumns,
  gutterInPx,
  marginInPx
) {
  this.name = name
  this.minimumWindowWidthInPx = minimumWindowWidthInPx
  this.maximumWindowWidthInPx = maximumWindowWidthInPx
  this.numOfColumns = numOfColumns
  this.gutterInPx = gutterInPx
  this.marginInPx = marginInPx
}

export function Viewport() {
  this.breakpoints = []
}

Viewport.prototype.addBreakpoint = function (...breakpoints) {
  if (Array.isArray(breakpoints) && breakpoints.length) {
    const mBreakpoints = []
    for (const bp of breakpoints) {
      if (bp instanceof Breakpoint) {
        mBreakpoints.push(bp)
      }
    }
    this.breakpoints = _orderBy(
      [...this.breakpoints, ...mBreakpoints],
      ['minimumWindowWidthInPx'],
      ['asc']
    )
  }
}

Viewport.prototype.getCurrentBreakpoint = function () {
  if (!window) {
    console.warn('window is undefined')
    return undefined
  }
  if (!this.breakpoints.length) {
    console.warn('no breakpoint has been defined')
  }
  const width = Math.floor(window.innerWidth)
  const currentBreakpoint = this.breakpoints.find(
    (bp) =>
      width >= bp.minimumWindowWidthInPx && width <= bp.maximumWindowWidthInPx
  )
  return currentBreakpoint
}
