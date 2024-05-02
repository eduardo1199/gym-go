import { Dayjs } from 'dayjs'

export function amountTotalMinutes(date: Dayjs) {
  const currentHour = date.hour()
  const currentMinute = date.minute()

  return currentHour * 60 + currentMinute
}
