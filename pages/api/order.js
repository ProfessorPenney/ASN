const stripe = require('stripe')(process.env.STRIPE_SK)

export default (req, res) => {
   if (req.method !== 'POST') {
      res.status(500).json({ message: 'Sorry we only accept POST requests' })
   }
}
