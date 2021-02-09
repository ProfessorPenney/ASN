import React from 'react'
import Nav from '../UI/NavBar'
import { Link } from 'react-router-dom'

const Index = () => {
   return (
      <div className='index'>
         <Nav />
         <header>
            <div className='background' />
            <h1>
               Build your <br /> <span className='red-text'>arsenal</span> of
               <span className='red-text'> sports nutrition</span> <br />
               products
            </h1>
         </header>
         <div className='site-preview'>
            <div>
               <h2>
                  Master our <Link to='/About'>Mission</Link>
               </h2>
               <hr />
               <p>
                  The creators of Arsenal wanted to bring you the most complete package of products
                  possible.
               </p>
            </div>
            <div>
               <h2>
                  Realize our <Link to='/Products'>Products</Link>
               </h2>
               <hr />
               <p>World class products in a world class Arsenal</p>
            </div>
            <div>
               <h2>
                  Wear our <Link to='/Apparel'>Apparel</Link>
               </h2>
               <hr />
               <p>Get the full experience by wearing our gear</p>
            </div>
         </div>
         <section className='about-preview'>
            <h2>Our Pledge</h2>
            <p>
               We’ve selected and developed healthy and all-natural formulas for your nutritional
               supplement ARSENAL to ensure only premium ingredients are introduced into your
               system. We are committed to supporting veterans, law enforcement, and all first
               responders. With every purchase you make, we give back!
            </p>
         </section>
         <section className='products-preview'></section>
         <section className='apparel-preview'></section>
      </div>
   )
}

export default Index
