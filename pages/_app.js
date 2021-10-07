import { Provider } from 'next-auth/client';
import NextNProgress from 'nextjs-progressbar';
import '../src/assets/scss/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NextNProgress
        color="#1D6B5C"
        startPosition={0}
        stopDelayMs={0}
        height={3}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
