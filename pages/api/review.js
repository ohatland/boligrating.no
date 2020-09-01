import pool from '../../libs/database'

const sqlAdressse = `
SELECT * FROM adresse_leilighet_review
WHERE adresse_id = ?
`

const sqlLeilighet = `
SELECT * FROM adresse_leilighet_review
WHERE leilighet_id = ?
`

export default async (req, res) => {

    if (req.query.adresse) {
        await pool.query(sqlAdressse, [req.query.adresse], (err, address, fields) => {
            if (err) {
                console.error(err)
    
                res.statusCode = 500
                res.json({
                    message: "Error",
                    reivews: []
                })
            }
    
            else {
                res.statusCode = 200
                res.json({
                    message: "OK",
                    reivews: address
                })
            }
        })
    }

    else if (req.query.leilighet) {
        await pool.query(sqlLeilighet, [req.query.leilighet], (err, address, fields) => {
            if (err) {
                console.error(err)
    
                res.statusCode = 500
                res.json({
                    message: "Error",
                    reivews: []
                })
            }
    
            else {
                res.statusCode = 200
                res.json({
                    message: "OK",
                    reivews: address
                })
            }
        })
    }

    else {
        res.json({message: 'Invalid querystring'})
    }

    

}