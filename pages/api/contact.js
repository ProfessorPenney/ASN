const nodemailer = require('nodemailer')

export default async (req, res) => {
   let transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
         user: process.env.CONTACT_EMAIL_LOGIN,
         pass: process.env.CONTACT_EMAIL_PW
      }
   })

   const info = await transporter.sendMail(
      {
         from: `"ASN Contact" <penneyprojects@outlook.com>`,
         to: 'kpenney@gmail.com, steve@arsenalsportsnutrition.com',
         subject: 'New Message',
         html: `
         <style>
            p {
               font-size: 20px;
            }
            ul {
               font-size: 20px;
            }
         </style>
            <p>You have a new contact request</p>
            <h2>Contact Details</h2>
            <ul>
               <li>Name: ${req.body.name}</li>
               <li>Email: ${req.body.email}</li>
            </ul>
            <h2>Message</h2>
            <p>${req.body.message}</p>
            `
      },
      (error, info) => {
         if (error) {
            console.log(error)
            return res.status(500).send('Nodemailer Error - ', error)
         }
         // console.log('Message sent: %s', info.messageId)
         res.status(200).send()
      }
   )
}
