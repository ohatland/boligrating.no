import { pool } from '../../libs/database'

const sql = `
SELECT * 
FROM adresser
LEFT JOIN reviews
ON adresser.bruksenhetid = reviews.adresse_id
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST('+Byvegen+5' IN BOOLEAN MODE) 
ORDER BY veinavn, nummer, nummer_bokstav
LIMIT 10;
`

export default (req, res) => {
    res.statusCode = 200
    pool.query(sql, (err, address, fields) => {
        res.json(address)
        console.log('response done')
    })
  }
  