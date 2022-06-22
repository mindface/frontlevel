import type { AppProps } from 'next/app'
import '../styles/d.sass';
import { Provider } from "react-redux";
import { setupStore } from "../store";

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme';

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore}>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
