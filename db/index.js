const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/plantsDatabase'

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('succesfully connected to MongoDB')
    })
    .catch(e =>{
        console.error('connection error', e.message)
    })

const db = mongoose.connection 

module.exports = db