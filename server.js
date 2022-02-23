const express = require("express");
const cors = require("cors");
const Pool = require("pg").Pool
const bodyParser = require('body-parser')

const app = express();

const port = 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "rep_powerlifting",
  password: "password",
  port: 5432,
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

const createUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    pool.query(
      "INSERT INTO users (firstName, lastName, email, phone, password) VALUES ($1, $2, $3, $4, $5)",
      [firstName, lastName, email, phone, password],
      (err, res) => {
        console.log(err, res);
      }
    );
  };

  const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

  app.get('/users', getUsers)
  app.post('/signup', createUser)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
