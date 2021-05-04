import Nav from '../Components/NavBar'

import aboutStyles from './about.module.scss'

const about = () => {
   return (
      <div className={aboutStyles.about}>
         <Nav page='about' />
         <h2>Mission</h2>
         <p>
            To equip you - "the athlete" - with premium products and superior service for all your
            sports nutritional needs.
         </p>
      </div>
   )
}

export default about
