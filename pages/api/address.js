import pool from '../../libs/database'

const sql = `
SELECT * 
FROM adresser
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST(? IN BOOLEAN MODE) 
ORDER BY veinavn, nummer, nummer_bokstav
LIMIT 7;
`

export default async (req, res) => {

    console.log("API fikk følgende query",req.query)

    if (req.query.q === 'undefined') {
        emptyResponse(res)
    }

    else if (req.query.q) {
        
        // TODO - serialize input
        // inserts '+' to work with BOOLEAN search mode in mysql
        const searchstring = '+' + req.query.q.split(' ').join('+')
        
        await pool.query(sql, [searchstring], (err, address, fields) => {
            if (err) {
                console.error(err)

                res.statusCode = 500
                res.json({ 
                    message: "Error",
                    address: []
                })
            }


            else if (address.length == 0) {
                emptyResponse(res)
            }

            else {
                console.log("API response: OK")
                res.statusCode = 200
                res.json({
                    message: "OK",
                    address: address
                })
            }
        })
        
    } 
    
    else {
        emptyResponse(res)
    }
}

function emptyResponse(res) {
    console.log("API response: Empty searchstring")
    res.statusCode = 200
    res.json({ 
        message: "Empty searchstring",
        address: []
    })
}