import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
   providers: [
      Providers.Google({
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET
      }),
      Providers.Facebook({
         clientId: process.env.FACEBOOK_ID,
         clientSecret: process.env.FACEBOOK_SECRET
      }),
      Providers.Email({
         server: {
            service: 'Outlook',
            auth: {
               user: process.env.CONTACT_EMAIL_LOGIN,
               pass: process.env.CONTACT_EMAIL_PW
            }
         },
         from: process.env.CONTACT_EMAIL_FROM
      })
   ],
   database: {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      synchronize: true //remove this for production
   },
   secret: process.env.NEXTAUTH_SECRET
}

export default (req, res) => NextAuth(req, res, options)
