const mysql = require('mysql')

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boligrating_testdata'
})

// Eks
pool.getConnection((err, connection) => {
    try {
        // execute query
    } catch (error) {
        
    } finally {
        connection.release()
    }
})



module.exports.pool = pool