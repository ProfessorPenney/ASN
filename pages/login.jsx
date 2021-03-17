import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import Nav from '../Components/NavBar'

import loginStyles from './login.module.scss'

const Login = () => {
   const [session, loading] = useSession()

   return (
      <div className={loginStyles.login}>
         <Nav page='login' />
         {!session && (
            <>
               Not signed in <br />
               <button onClick={() => signIn()}>Sign In</button>
            </>
         )}
         {session && (
            <>
               Signed in email {session.user.email} <br />
               name {session.user.name} <br />
               <div>Now you can access our super secret pages</div>
               <button onClick={() => signOut()}>Sign Out</button>
            </>
         )}
      </div>
   )
}

export default Login
