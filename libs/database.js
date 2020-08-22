import mysql from 'mysql'
import util from 'util'

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boligrating_testdata'
})

pool.query = util.promisify(pool.query)

module.exports = pool