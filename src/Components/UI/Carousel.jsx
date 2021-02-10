import React, { useState } from 'react'
import Slide from './Slide'

const Carousel = ({ apparel }) => {
   const [index, setIndex] = useState(0)

   const rightButton = () => {
      setIndex(current => current + 1 === apparel.length ? 0 : current +1)
   }

   const leftButton = () => {
      setIndex(current => current === 0 ? apparel.length : current -1)
   }

   return (
      <div className='carousel'>
         <button className='left' onClick={() => leftButton()}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
         <Slide item={apparel[index]} />
         <Slide item={apparel[index > apparel.length index + 1]} />
         <Slide item={apparel[index + 2]} />
         <button className='right' onClick={() => rightButton()}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
      </div>
   )
}

export default Carousel
