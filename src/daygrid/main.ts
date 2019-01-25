import { createPlugin } from '@fullcalendar/core'
import BasicView from './BasicView'

export { default as SimpleDayGrid, DayGridSlicer } from './SimpleDayGrid'
export { default as DayGrid, DayGridSeg } from './DayGrid'
export { default as AbstractBasicView } from './AbstractBasicView'
export { default as BasicView, buildDayTable as buildBasicDayTable } from './BasicView'
export { default as DayBgRow } from './DayBgRow'

export default createPlugin({
  viewConfigs: {

    basic: BasicView,

    basicDay: {
      type: 'basic',
      duration: { days: 1 }
    },

    basicWeek: {
      type: 'basic',
      duration: { weeks: 1 }
    },

    month: {
      type: 'basic',
      monthMode: true,
      duration: { months: 1 }, // important for prev/next
      fixedWeekCount: true
    }

  }
})
