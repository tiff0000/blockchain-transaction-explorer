import { NetworkProvider } from '../context/chainContext'
import '../styles/global.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NetworkProvider>
      <Component {...pageProps} />
    </NetworkProvider>
  )
}
