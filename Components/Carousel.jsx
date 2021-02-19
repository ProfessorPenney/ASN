import { useState } from 'react'
import Slide from './Slide'

const Carousel = ({ apparel }) => {
   const [numOfSlides, setNumOfSlides] = useState(2)
   const [position, setPosition] = useState(0)

   const rightButton = () => {
      if (position + 2 > numOfSlides) setNumOfSlides(num => num + 1)
      setTimeout(() => {
         setPosition(val => val + 1)
      }, 1)
   }

   const leftButton = () => {
      setPosition(val => val - 1)
   }

   let slides = []
   for (let i = 0; i < numOfSlides; i++) {
      slides.push(<Slide key={i} firstItem={i * 3} apparel={apparel} position={position} />)
   }

   return (
      <div className='carousel'>
         <button className='left' onClick={() => leftButton()} disabled={!position}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
         {slides}
         <button className='right' onClick={() => rightButton()}>
            <hr className='top' />
            <hr className='bottom' />
         </button>
      </div>
   )
}

export default Carousel
