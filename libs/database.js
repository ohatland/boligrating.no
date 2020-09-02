import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

// load values from .env file
dotenv.config()

let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_IP,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'boligrating_testdata'
})

module.exports = pool