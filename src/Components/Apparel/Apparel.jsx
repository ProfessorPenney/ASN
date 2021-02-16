import React from 'react'
import Nav from '../UI/NavBar'
import shirtsPic from '../../assets/shirts.jpg'

const Apparel = () => {
   return (
      <div className='apparel'>
         <Nav />
         <h2>Shirts are in!</h2>
         <div className='shirt-div'>
            <img src={shirtsPic} alt='Four shirt styles' />
         </div>
      </div>
   )
}

export default Apparel
