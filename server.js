const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

const port  = 3001

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Todd@1994',
  database: 'rep-powerlifting',
})

app.post('/SignUp', (req, res) => {

  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const phone = req.body.phone
  const password = req.body.password

  db.query(
    'INSERT INTO Users (firstname, lastname, email, phone, password) VALUES (?,?,?,?,?)', [firstname, lastname, email, phone, password], (err, result) => {
   console.log(err); 
  }
  )
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query(
    'SELECT * FROM Users WHERE email = ? AND password = ?', [email, password], (err, result) => {
      if (err) {
        res.send({err: err})
      }

      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({message: 'Wrong email/password combination!'})
      } 
  }
  )
})

app.post('/media', (req, res) => {
  const media = req.body.media

  db.query(
    'INSERT INTO media (media) VALUE (?)', [media], (err, result) => {
   console.log(err); 
  }
  )
})

app.get('/returnedmedia', (req, res) => {
  db.query(
    'SELECT * FROM media', (err, result) => {
      console.log(result);
      if (err) {
        res.send({err: err})
      }

      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({message: 'There was no data'})
      } 
  }
  )
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})