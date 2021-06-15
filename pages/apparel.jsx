import Nav from '../Components/NavBar'
// import shirtsPic from '../assets/shirts.jpg'

import apparelStyles from './apparel.module.scss'

const apparel = () => {
   const shirtsPic1 = '/assets/original/Shirt1.jpeg'
   const shirtsPic2 = '/assets/original/Shirt2.jpeg'
   return (
      <div className={apparelStyles.apparel}>
         <Nav page='apparel' />
         <h2>Shirts are in!</h2>
         <div className={apparelStyles.shirtDiv}>
            <img src={shirtsPic1} alt='Shirts with ASN logo' />
            <img src={shirtsPic2} alt='Shirts with ASN emblem' />
         </div>
      </div>
   )
}

export default apparel
