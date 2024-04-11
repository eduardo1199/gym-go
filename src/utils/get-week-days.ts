import { eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getWeekDays() {
  const getDaysFromWeek = eachDayOfInterval({
    start: startOfWeek(new Date()),
    end: endOfWeek(new Date()),
  })

  const daysOfWeek = getDaysFromWeek.map((day) => {
    return {
      day,
      label: format(day, 'EEEE', {
        locale: ptBR,
      }),
    }
  })

  return {
    daysOfWeek,
  }
}
