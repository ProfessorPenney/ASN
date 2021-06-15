import Stripe from 'stripe'
import { parseCookies, setCookie } from 'nookies'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Nav from '../Components/NavBar'
import CheckoutForm from '../Components/CheckoutForm'

import checkoutStyles from './checkout.module.scss'

// const stripePromise = loadStripe(
//    pk_test_51IZ6jHHtQFYdcYXUkdLz8LYMutVV6sfz9Q4wbAeRbSc7N8IqBmfhrATr7WQtHPg0DsugMwaGzwvlvPoiIu3oDHFw009WR5ti0A
// )

export const getServerSideProps = async ctx => {
   const stripe = new Stripe(process.env.STRIPE_SK)

   // const calculateOrderAmount = items => {
   //    return items
   // }

   let paymentIntent

   const { paymentIntentId } = await parseCookies(ctx)

   if (paymentIntentId) {
      paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

      return {
         props: {
            paymentIntent
         }
      }
   }

   paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd'
   })

   setCookie(ctx, 'paymentIntentId', paymentIntent.id)

   return {
      props: {
         paymentIntent
      }
   }
}

const Checkout = ({ paymentIntent }) => {
   // var stripe = Stripe(
   //    'pk_test_51IZ6jHHtQFYdcYXUkdLz8LYMutVV6sfz9Q4wbAeRbSc7N8IqBmfhrATr7WQtHPg0DsugMwaGzwvlvPoiIu3oDHFw009WR5ti0A'
   // )

   // const purchase = {
   //    items: [{ id: 'xl-tshirt' }]
   // }

   // fetch('/create-payment-intent', {
   //    method: 'POST',
   //    headers: {
   //       'Content-Type': 'application/json'
   //    },
   //    body: JSON.stringify(purchase)
   // })
   //    .then(result => result.json())
   //    .then(data => {
   //       var elements = stripe.elements()

   //       var style = {
   //          base: {
   //             color: '#32325d',
   //             fontFamily: 'Arial, sans-serif',
   //             fontSmoothing: 'antialiased',
   //             fontSize: '16px',
   //             '::placeholder': {
   //                color: '#32325d'
   //             }
   //          },
   //          invalid: {
   //             fontFamily: 'Arial, sans-serif',
   //             color: '#fa755a',
   //             iconColor: '#fa755a'
   //          }
   //       }

   //       var card = elements.create('card', { style: style })
   //       // Stripe injects an iframe into the DOM
   //       card.mount('#card-element')
   //       card.on('change', function (event) {
   //          // Disable the Pay button if there are no card details in the Element
   //          document.querySelector('button').disabled = event.empty
   //          document.querySelector('#card-error').textContent = event.error
   //             ? event.error.message
   //             : ''
   //       })
   //       const submitPayment = e => {
   //          e.preventDefault()
   //          // Complete payment when the submit button is clicked
   //          payWithCard(stripe, card, data.clientSecret)
   //       }
   //    })

   return (
      <>
         <Nav page='products' />
         <div className={checkoutStyles.container}>
            {/* <Elements stripe={stripePromise}>
               <CheckoutForm paymentIntent={paymentIntent} />
            </Elements> */}
         </div>
      </>
   )
}

export default Checkout
