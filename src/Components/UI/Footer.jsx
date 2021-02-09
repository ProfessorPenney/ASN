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
               <Link to='/About' style={{ transition: 'opacity 1.3s 0.2s' }}>
                  <li>About</li>
               </Link>
               <Link to='/Products' style={{ transition: 'opacity 1.3s 0.4s' }}>
                  <li>Products</li>
               </Link>
               <Link to='/Apparel' style={{ transition: 'opacity 1.3s 0.6s' }}>
                  <li>Apparel</li>
               </Link>
               <Link to='/Contact' style={{ transition: 'opacity 1.3s 0.8s' }}>
                  <li>Contact</li>
               </Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
