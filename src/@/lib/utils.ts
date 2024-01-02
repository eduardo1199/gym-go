import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

dayjs.locale('pt-br')
