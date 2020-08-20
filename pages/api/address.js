import { pool } from '../../libs/database'

const sql = `
SELECT * 
FROM adresser
LEFT JOIN reviews
ON adresser.bruksenhetid = reviews.adresse_id
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST('+Andeby' IN BOOLEAN MODE) 
ORDER BY veinavn, nummer
LIMIT 5;
`

export default (req, res) => {
    res.statusCode = 200
    pool.query(sql, (err, address, fields) => {
        res.json(address)
        console.log('response done')
    })
  }
  