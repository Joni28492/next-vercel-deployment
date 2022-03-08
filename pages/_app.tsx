import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';


type NextPageWithLAyout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;//jsx.element =
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLAyout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />)
  // return (
  //   <>
  //   <Component {...pageProps} />
  //   </>
  // )

}

export default MyApp
