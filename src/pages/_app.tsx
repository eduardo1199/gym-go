import type { AppProps } from 'next/app'

import '../@/lib/utils'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import 'styles/globals.css'
import 'styles/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Component {...pageProps} />
    </LocalizationProvider>
  )
}

export default MyApp
