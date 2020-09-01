import pool from '../../libs/database'

const sql = `
SELECT * FROM adresse_leilighet
WHERE adresse_id = ?
`

export default async (req, res) => {

    await pool.query(sql, [req.query.id], (err, address, fields) => {
        if (err) {
            console.error(err)

            res.statusCode = 500
            res.json({
                message: "Error",
                leilighet: []
            })
        }

        else {
            res.statusCode = 200
            res.json({
                message: "OK",
                leilighet: address
            })
        }
    })

}