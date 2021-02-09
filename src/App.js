import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './Components/UI/NavBar'
import Index from './Components/Index/Index'

function App() {
   return (
      <div className='App'>
         <Nav />
         <Router>
            <Route exact path='/' component={Index} />
            <Route path='/About' component={} />
            <Route path='/Products' component={} />
            <Route path='/Apparel' component={} />
            <Route path='/Contact' component={} />
            <Route path='*' render={() => <Redirect to='/' />} />
         </Router>
      </div>
   )
}

export default App
