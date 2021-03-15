import Link from 'next/link'

import Nav from '../Components/NavBar'
import Carousel from '../Components/Carousel'

import apparel from '../apparel'

const index = () => {
   const whiteLogo = '/assets/tiny/ASN-white-logo.png'

   return (
      <div className='index'>
         <Nav logo={whiteLogo} />
         <header>
            <div className='background bg1' />
            <div className='background bg2' />
            <div className='background bg3' />
            <h1>
               Build your <br /> <span className='red-text'>arsenal</span> of
               <span className='red-text'> sports nutrition</span> <br />
               products
            </h1>
         </header>
         <div className='site-preview'>
            <div>
               <h2>
                  Master our
                  <Link href='/About'>
                     <a> Mission</a>
                  </Link>
               </h2>
               <hr />
               <p>
                  The creators of Arsenal wanted to bring you the most complete package of products
                  possible.
               </p>
            </div>
            <div>
               <h2>
                  Realize our
                  <Link href='/Products'>
                     <a> Products</a>
                  </Link>
               </h2>
               <hr />
               <p>World class products in a world class Arsenal</p>
            </div>
            <div>
               <h2>
                  Wear our
                  <Link href='/Apparel'>
                     <a> Apparel</a>
                  </Link>
               </h2>
               <hr />
               <p>Get the full experience by wearing our gear</p>
            </div>
         </div>
         <section className='about-preview'>
            <h2>
               Our <span>Pledge</span>
            </h2>
            <div>
               <p>
                  We’ve selected and developed healthy and all-natural formulas for your nutritional
                  supplement ARSENAL to ensure only premium ingredients are introduced into your
                  system. We are committed to supporting veterans, law enforcement, and all first
                  responders. With every purchase you make, we give back!
               </p>
               <Link href='/About'>Learn More</Link>
            </div>
         </section>
         <section className='products-preview'>
            <h2>Products</h2>
            <p>Coming Soon</p>
         </section>
         <section className='apparel-preview'>
            <h2>Apparel</h2>
            <Carousel apparel={apparel} />
         </section>
      </div>
   )
}

export default index
