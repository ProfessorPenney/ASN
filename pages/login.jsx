import Nav from '../Components/NavBar'

import loginStyles from './login.module.scss'

const Login = () => {
   return (
      <div className={loginStyles.login}>
         <Nav page='login' />
         <h2>Login?</h2>
      </div>
   )
}

export default Login
