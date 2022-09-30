const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, 'src', '.env')})
const express = require('express')
const app = express()
const routes = require('./src/routes')
const mongoose = require('mongoose')


app.use(express.json())
app.use(routes)

mongoose.connect(process.env.DATABASE, function(error){
    if(!error){
        console.log('Database conected')
    } else{
        console.log(error)
    }
})

app.listen(8080, console.log('Server Listening'))