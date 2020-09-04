import pool from '../../libs/database'

const sqlAdresser = 'call finn_adresser_med_navn(?)'
export default async (req, res) => {

    // if api recives a query with id q
    if (req.query.q) {

        // variable to populate with sql response and sendt by api as json
        let data = {}

        // TODO - sanitize input

        // inserts '+' before every word in searchstring to work with BOOLEAN search mode in mysql
        const searchstring = '+' + req.query.q.split(' ').join('+')

        const [rows, fields] = await pool.query(sqlAdresser, [searchstring])
        data.adresser = rows[0]

        if (data.adresser.length == 0) {
            emptyResponse(res, data)
        }
            
        res.statusCode = 200
        res.json(data)
    }

    else {
        noQuerystring(res, data)
    }
}

function noQuerystring(res, data) {
    res.statusCode = 200
    res.json({
        message: "Empty searchstring",
        data
    })
}

function emptyResponse(res, data) {
    res.statusCode = 200
    res.json({
        message: "Empty response",
        data
    })
}