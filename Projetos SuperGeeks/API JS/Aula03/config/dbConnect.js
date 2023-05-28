const mongoose = require("mongoose")

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNEWUrlParser: true
})

const db = mongoose.connection

module.exports = db