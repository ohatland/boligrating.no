import pool from '../../libs/database'

const sqlAdressse = 'call finn_adresse_leilighet_review_med_adresse_id(?)'

export default async (req, res) => {

    if (req.query.adresse_id) {

        const [rows] = await pool.query(sqlAdressse, [req.query.adresse_id])
        res.statusCode = 200
        res.json({
            adresse: rows[0][0],
            leiligheter: rows[1],
            reviews: rows[2]
        })
    }

    else {
        res.statusCode = 200
        res.json({message: 'Invalid querystring'})
    }

    

}