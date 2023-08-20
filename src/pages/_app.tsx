import type { AppProps } from 'next/app'

import { Theme } from '@radix-ui/themes'

import '../styles/globals.css'

import '@radix-ui/themes/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
