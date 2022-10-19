const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000
const app = express()

mongoose.connect('mongodb://localhost/friends', { useNewUrlParser: true } )
const db = mongoose.connection

db.on('error', () => {console.log('error');})
db.once('open', () => {console.log('opened');})

app.use( express.json() )

const friendsRoute = require('./routes/friends')
app.use('/friends', friendsRoute)

app.listen(PORT, () => { console.log(`Server is alive on http://localhost:${PORT}`); })