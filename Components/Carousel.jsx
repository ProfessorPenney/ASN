import { useState } from 'react'
import Slide from './Slide'

import carouselStyles from './carousel.module.scss'

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
   const firstSlide = (
      <Slide key='1' firstItem='0' apparel={apparel} position={position} loading='lazy' />
   )

   const slides = []
   for (let i = 1; i < numOfSlides; i++) {
      slides.push(<Slide key={i} firstItem={i * 3} apparel={apparel} position={position} />)
   }

   return (
      <div className={carouselStyles.carousel}>
         <button className={carouselStyles.left} onClick={() => leftButton()} disabled={!position}>
            <hr className={carouselStyles.top} />
            <hr className={carouselStyles.bottom} />
         </button>
         {firstSlide}
         {slides}
         <button className={carouselStyles.right} onClick={() => rightButton()}>
            <hr className={carouselStyles.top} />
            <hr className={carouselStyles.bottom} />
         </button>
      </div>
   )
}

export default Carousel
