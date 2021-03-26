const db = require('../../lib/dbconnection')

export default (req, res) => {
   if (req.method !== 'GET') res.status(500).json({ message: 'Sorry we only accept GET requests' })
   const sql = 'SELECT * FROM product'

   db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
   })
}
