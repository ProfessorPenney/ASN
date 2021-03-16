import { Provider } from 'next-auth/client'

import Footer from '../Components/Footer'
import Meta from '../Components/Meta'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Meta />
         <Provider session={pageProps.session}>
            <Component {...pageProps} />
         </Provider>
         <Footer />
      </>
   )
}

export default MyApp
