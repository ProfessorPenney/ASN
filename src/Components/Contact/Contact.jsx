import React, { useState } from 'react'
import Nav from '../UI/NavBar'

const Contact = () => {
   const [feedback, setFeedback] = useState('')
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [message, setMessage] = useState('')

   const buttonClick = e => {
      e.preventDefault()
      if (name === '') {
         setFeedback('Please enter your name.')
      } else if (email === '') {
         setFeedback('Please enter an email.')
      } else if (message === '') {
         setFeedback('Please enter a message.')
      } else {
         setFeedback('Email Sent.')
         setName('')
         setEmail('')
         setPhone('')
         setMessage('')
         fetch('/contactform', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
               name,
               email,
               phone,
               message
            })
         })
      }
   }

   return (
      <div className='contact'>
         <Nav />
         <h2>
            Contact <span>Arsenal</span>
         </h2>
         <div className='page-container'>
            <div className='left'>
               <p>
                  <a href='mailto:steve@arsenalsportsnutrition.com'>Email: </a>
                  <br />
                  steve@arsenalsportsnutrition.com
               </p>
            </div>
            <form>
               <div>
                  <label className='grid-item' htmlFor='name'>
                     Name:
                  </label>
                  <input
                     value={name}
                     name='name'
                     id='name'
                     type='text'
                     onChange={e => setName(e.target.value)}
                  />
               </div>
               <div>
                  <label className='grid-item' htmlFor='email'>
                     Email:
                  </label>
                  <input
                     value={email}
                     name='email'
                     id='email'
                     type='email'
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>
               <div className='message-div'>
                  <label className='grid-item' htmlFor='messsage'>
                     Message:
                  </label>
                  <textarea
                     value={message}
                     name='message'
                     id='message'
                     onChange={e => setMessage(e.target.value)}
                  />
               </div>
               <div>
                  <p className='feedback'>{feedback}</p>
                  <button type='submit' onClick={e => buttonClick(e)}>
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Contact
