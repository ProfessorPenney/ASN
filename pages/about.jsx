import Nav from '../Components/NavBar'

import aboutStyles from './about.module.scss'

const about = () => {
   return (
      <div className={aboutStyles.about}>
         <Nav />
         <h2>Learn About the Creators of ARSENAL</h2>
      </div>
   )
}

export default about
