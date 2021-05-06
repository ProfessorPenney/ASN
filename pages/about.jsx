import Nav from '../Components/NavBar'

import aboutStyles from './about.module.scss'

const about = () => {
   const whiteLogo = '/assets/newlogos/horizontal logo white.png'

   return (
      <div className={aboutStyles.about}>
         <Nav logo={whiteLogo} page='about' />
         <div className={aboutStyles.center}>
            <h2>Mantra</h2>
            <p>To fuel athletes of every caliber</p>
         </div>
         <div className={aboutStyles.center}>
            <h2>Mission</h2>
            <p>
               To equip you - "the athlete" - with premium products and superior service for all
               your sports nutritional needs.
            </p>
         </div>
         <div className={aboutStyles.center}>
            <h2>Vision</h2>
            <p>
               Together, to equip our community - forged by the insatiable desire to learn faster,
               grow stronger, and encourage one another to strive for new heights - with premium
               products and superior service for all your sports nutritional needs.
            </p>
         </div>
      </div>
   )
}

export default about
