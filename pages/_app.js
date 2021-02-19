import Footer from '../Components/Footer'
import '../styles/css/App.css'

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Component {...pageProps} />
         <Footer />
      </>
   )
}

export default MyApp
