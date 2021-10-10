const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'})
    fs.readFile('views/index.html', (error, data) => {
        if(error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log(`You are on port ${port}`)
    }
})