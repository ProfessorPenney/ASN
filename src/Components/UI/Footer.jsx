import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer>
         <p>
            Copyright &#169; {new Date().getFullYear()} Arsenal Sports Nutrition - All Rights
            Reserved
         </p>
         <div>
            <h3>Site Map</h3>
            <nav>
               <Link to='/Home'>
                  <li>Home</li>
               </Link>
               <Link to='/About'>
                  <li>About</li>
               </Link>
               <Link to='/Products'>
                  <li>Products</li>
               </Link>
               <Link to='/Apparel'>
                  <li>Apparel</li>
               </Link>
               <Link to='/Contact'>
                  <li>Contact</li>
               </Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
