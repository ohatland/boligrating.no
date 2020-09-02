import pool from '../../libs/database'

const sqlAdresser = 'call finn_adresser(?)'
const sqlLeiligheter = 'call finn_leiligheter_med_adresse_id(?)'
const sqlReviews = 'call finn_reviews_med_adresse_id(?)'

export default async (req, res) => {

    // if api recives a query with id q
    if (req.query.q) {

        // variable to populate with sql response and sendt by api as json
        let data = {}

        // TODO - sanitize input

        // inserts '+' before every word in searchstring to work with BOOLEAN search mode in mysql
        const searchstring = '+' + req.query.q.split(' ').join('+')

        data.adresser = (await pool.query(sqlAdresser, [searchstring]))[0][0]

        if (data.adresser.length == 0) {
            emptyResponse(res, data)
        }

        else {   
            for (const adresse of data.adresser) {
                adresse.leiligheter = (await pool.query(sqlLeiligheter, [adresse.id]))[0][0]
                adresse.reviews = (await pool.query(sqlReviews, [adresse.id]))[0][0]
            }
            
            res.statusCode = 200
            res.json(data)
        }
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