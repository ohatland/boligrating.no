import pool from '../../libs/database'

const sqlAdresser = 'call finn_adresser_med_navn(?)'
export default async (req, res) => {

    // if api recives a query with id q
    if (req.query.q) {

        // variable to populate with sql response and sendt by api as json

        // TODO - sanitize input

        // inserts '+' before every word in searchstring to work with BOOLEAN search mode in mysql
        const searchstring = '+' + req.query.q.split(' ').join('+')

        const [rows, fields] = await pool.query(sqlAdresser, [searchstring])
        const adresser = rows[0]

        if (adresser.length == 0) {
            emptyResponse(res, adresser)
        }
        
        else {
            res.statusCode = 200
            res.json({adresser})
        }
    }

    else {
        noQuerystring(res, adresser)
    }
}

function noQuerystring(res, adresser) {
    res.statusCode = 200
    res.json({
        message: "Empty searchstring"
    })
}

function emptyResponse(res, adresser) {
    res.statusCode = 200
    res.json({
        message: "Empty response"
    })
}