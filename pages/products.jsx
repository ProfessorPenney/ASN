import Nav from '../Components/NavBar'

import productStyles from './products.module.scss'

const Products = () => {
   const addSale = () => {
      fetch('/api/sale', {
         method: 'POST',
         headers: { 'Content-type': 'Application/json' },
         body: JSON.stringify({
            title: 'protein powder',
            qty: 1,
            customer: 'kpenney@gmail.com',
            price: 19.99,
            shipping_cost: 5.0,
            tax: 1.35
         })
      })
         .then(res => res.json())
         .then(data => console.log(data))
   }

   return (
      <div className={productStyles.products}>
         <Nav page='products' />
         <h2>Products Coming Soon</h2>
         {/* <div className={productStyles.container}>
            <h2>Protein Powder</h2>
            <div className={productStyles.product}>
               <img src='/assets/original/protein-powders.jpg' alt='Protein Powder' />
               <div className={productStyles.right}>
                  <p>Description here</p>
                  <a onClick={addSale}>Add to Cart</a>
               </div>
            </div>
         </div> */}
      </div>
   )
}

export default Products
