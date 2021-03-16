import Link from 'next/link'

import Nav from '../Components/NavBar'
import Carousel from '../Components/Carousel'

import indexStyles from './index.module.scss'

import apparel from '../apparel'

const index = () => {
   const whiteLogo = '/assets/tiny/ASN-white-logo.png'

   return (
      <div className={indexStyles.index}>
         <Nav logo={whiteLogo} page='index' />
         <header>
            <div className={indexStyles.bg1} />
            <div className={indexStyles.bg2} />
            <div className={indexStyles.bg3} />
            <h1>
               Build your <br /> <span>arsenal</span> of
               <span> sports nutrition</span> <br />
               products
            </h1>
         </header>
         <div className={indexStyles['site-preview']}>
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
         <section className={indexStyles['about-preview']}>
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
         <section className={indexStyles['products-preview']}>
            <h2>Products</h2>
            <p>Coming Soon</p>
         </section>
         <section className={indexStyles['apparel-preview']}>
            <h2>Apparel</h2>
            <Carousel apparel={apparel} />
         </section>
      </div>
   )
}

export default index
