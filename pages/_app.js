import Footer from '../Components/Footer'
import Meta from '../Components/Meta'
import '../styles/css/App.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Meta />
         <Component {...pageProps} />
         <Footer />
      </>
   )
}

export default MyApp
