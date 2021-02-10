import React from 'react'
import { Link } from 'react-router-dom'

const Slide = ({ item }) => {
   return (
      <div className='slide'>
         <Link to='/Apparel'>
            <img src={item.pic} alt={item.name} />
         </Link>
      </div>
   )
}

export default Slide
