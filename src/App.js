import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import Nav from './Components/UI/NavBar'
import Index from './Components/Index/Index'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Apparel from './Components/Apparel/Apparel'
import Contact from './Components/Contact/Contact'
import Footer from './Components/UI/Footer'

function App() {
   return (
      <div className='App'>
         <Router>
            {/* <Nav /> */}
            <Route exact path='/' component={Index} />
            <Route path='/About' component={About} />
            <Route path='/Products' component={Products} />
            <Route path='/Apparel' component={Apparel} />
            <Route path='/Contact' component={Contact} />
            <Route path='*' render={() => <Redirect to='/' />} />
            <Footer />
         </Router>
      </div>
   )
}

export default App
