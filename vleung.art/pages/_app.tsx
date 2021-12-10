import type { AppProps } from 'next/app'
import GlobalStyles from './../styles/GlobalStyles'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
