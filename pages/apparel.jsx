import Nav from '../Components/NavBar'
// import shirtsPic from '../assets/shirts.jpg'

import apparelStyles from './apparel.module.scss'

const apparel = () => {
   const shirtsPic = '/assets/tiny/shirts.jpg'
   return (
      <div className={apparelStyles.apparel}>
         <Nav />
         <h2>Shirts are in!</h2>
         <div className={apparelStyles.shirtDiv}>
            <img src={shirtsPic} alt='Four shirt styles' />
         </div>
      </div>
   )
}

export default apparel
