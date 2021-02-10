import React, { useState } from 'react'
import Slide from './Slide'

const Carousel = ({ apparel }) => {
   const [index1, setIndex1] = useState(0)
   const [index2, setIndex2] = useState(1)
   const [index3, setIndex3] = useState(2)

   const rightButton = () => {
      setIndex1(current => (current + 1 === apparel.length ? 0 : current + 1))
      setIndex2(current => (current + 1 === apparel.length ? 0 : current + 1))
      setIndex3(current => (current + 1 === apparel.length ? 0 : current + 1))
   }

   const leftButton = () => {
      setIndex1(current => (current === 0 ? apparel.length - 1 : current - 1))
      setIndex2(current => (current === 0 ? apparel.length - 1 : current - 1))
      setIndex3(current => (current === 0 ? apparel.length - 1 : current - 1))
   }

   return (
      <div className='carousel'>
         <button className='left' onClick={() => leftButton()}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
         <Slide item={apparel[index1]} />
         <Slide item={apparel[index2]} />
         <Slide item={apparel[index3]} />
         <button className='right' onClick={() => rightButton()}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
      </div>
   )
}

export default Carousel
