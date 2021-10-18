const express = require('express');
const morgan = require('morgan');
const {Prohairesis} = require('prohairesis');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
const port = process.env.PORT || 8080


const mySQLString = process.env.CLEARDB_DATABASE_URL;
const database = new Prohairesis(mySQLString);

app.use(morgan('dev'));
app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.get('/api/user', async (req, res) => {
    const users = await database.query(`
        SELECT
            email,
            password
        FROM
            User
    `)
    res.end('user logged in')
})

app.post('/api/user', async (req, res) => {
    const body = req.body;

    await database.execute(`
    INSERT INTO User (
    first_name,
    last_name,
    email,
    password
    ) VALUES (
        @firstName,
        @lastName,
        @email,
        @password
    )
    `, {
        firstName: body.first,
        lastName: body.last,
        email: body.email,
        password: body.password,
    })
    res.end('Added User');
})

app.listen(port, () => console.log(`Server listening on port ${port}`))