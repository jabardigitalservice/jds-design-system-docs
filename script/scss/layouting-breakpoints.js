/* eslint-disable no-global-assign */
require = require('esm')(module)

const { viewport } = require('../../config/layouting/breakpoint')
const { Breakpoint } = require('../../config/layouting/breakpoint/model')
const { writeSCSS } = require('./write-scss')

async function run() {
  await writeSCSS({
    outputPath:
      '../../assets/stylesheet/jds-design-system/variables/_layouting-breakpoints.scss',
    write: (append) => {
      for (const bp of viewport.breakpoints) {
        if (bp instanceof Breakpoint) {
          const {
            name,
            minimumWindowWidthInPx,
            maximumWindowWidthInPx,
            numOfColumns,
            marginInPx,
            gutterInPx,
          } = bp
          // $breakpoint-xsmall     : 319 !default;
          // $num-of-columns-xsmall : 4   !default;
          // $row-margin-xsmall     : 16  !default;
          // $column-gutter-xsmall  : 24  !default;
          append(`// Breakpoint ${name}`)
          append(`$${name}-breakpoint-min-width: ${minimumWindowWidthInPx}px;`)
          append(`$${name}-breakpoint-max-width: ${maximumWindowWidthInPx}px;`)
          append(`$${name}-column-gutter: ${gutterInPx}px;`)
          append(`$${name}-num-of-columns: ${numOfColumns};`)
          append(`$${name}-row-margin: ${marginInPx}px;`)
          append(`\n`)
        }
      }
    },
  })

  await writeSCSS({
    dependencies: [
      [
        '../../assets/stylesheet/jds-design-system/variables/_layouting-breakpoints.scss',
        { as: 'bp' },
      ],
    ],
    outputPath:
      '../../assets/stylesheet/jds-design-system/layouting-breakpoints.scss',
    write: (append) => {
      const createRowAndColumnClassList = (breakpointName) => {
        const classList = []
        classList.push(`
          .jds-row {
            margin: -(bp.$${breakpointName}-column-gutter);
            padding: bp.$${breakpointName}-row-margin / 2;

            .jds-col {
              padding: bp.$${breakpointName}-column-gutter / 2;
              flex: 1 1 auto;
            }

            .jds-col.jds-col-${breakpointName}--1 {
              width: 100%;
              flex: none;
            }

            $cols: bp.$${breakpointName}-num-of-columns;
            @for $i from 1 through $cols {
              .jds-col.jds-col-${breakpointName}--#{$i}\\/#{$cols} {
                width: (100% * $i / $cols);
                flex: none;
              }
            }
          }
        `)
        return classList.join('\n')
      }

      const createMediaQuery = (breakpointName, content) => `
        @media screen
          and (min-width: bp.$${breakpointName}-breakpoint-min-width)
          and (max-width: bp.$${breakpointName}-breakpoint-max-width) {
          ${content}
        }
      `

      for (const bp of viewport.breakpoints) {
        if (bp instanceof Breakpoint) {
          const rowAndColumns = createRowAndColumnClassList(bp.name)
          const mediaQuery = createMediaQuery(bp.name, rowAndColumns)
          append(mediaQuery)
        }
      }
    },
  })
}

run()
