import Nav from '../Components/NavBar'
// import shirtsPic from '../assets/shirts.jpg'

const apparel = () => {
   const shirtsPic = '/assets/shirts.jpg'
   return (
      <div className='apparel'>
         <Nav />
         <h2>Shirts are in!</h2>
         <div className='shirt-div'>
            <img src={shirtsPic} alt='Four shirt styles' />
         </div>
      </div>
   )
}

export default apparel
