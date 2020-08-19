import mysql from 'mysql'

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boligrating'
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

export { pool }