import { addHours, format, startOfDay } from 'date-fns'

export function getHoursOfDay() {
  const hoursFromDay = Array.from({ length: 24 }).map((_, index) => {
    const startDay = startOfDay(new Date())

    const hour = format(addHours(startDay, index), "kk':00h'")

    return hour
  })

  return {
    hoursFromDay,
  }
}
