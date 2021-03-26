const db = require('../../lib/dbconnection')

export default (req, res) => {
   if (req.method !== 'POST')
      res.status(500).json({ message: 'Sorry we only accept POST requests' })

   const { customer, tax, shipping_cost, price, qty, title } = req.body
   const sql1 = `SELECT * FROM customer WHERE email='kpenney@gmail.com' LIMIT 1;`

   db.query(sql1, (err, result) => {
      if (err) throw err
      const { customer_id, shipping_address, first_name, last_name } = result[0]
      console.log(customer_id)
      console.log(shipping_address)
      console.log(first_name)
      console.log(last_name)
      const sql2 = `INSERT INTO transaction VALUES(${customer_id}, 0, ${shipping_address}, ${tax}, ${shipping_cost}, CURRENT_TIMESTAMP, '${first_name}', '${last_name}');`

      db.query(sql2, (err, result2) => {
         if (err) {
            throw err
         }
         const sql3 = `INSERT INTO product_sold VALUES(LAST_INSERT_ID(), 0, ${price}, ${qty}, '${title}');`

         db.query(sql3, (err, result3) => {
            if (err) throw err
            res.json({ message: 'Success' })
         })
      })
   })
}
