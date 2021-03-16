import Nav from '../Components/NavBar'

import productStyles from './products.module.scss'

const Products = () => {
   return (
      <div className={productStyles.products}>
         <Nav page='products' />
         <h2>Products Coming Soon</h2>
      </div>
   )
}

export default Products
