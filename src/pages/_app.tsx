import type { AppProps } from 'next/app'

import '../@/lib/utils'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { SessionProvider } from 'next-auth/react'

import 'styles/globals.css'
import 'styles/material'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <Component {...pageProps} />
      </LocalizationProvider>
    </SessionProvider>
  )
}

export default App
