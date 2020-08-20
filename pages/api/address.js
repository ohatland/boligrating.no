import { pool } from '../../config/database'

const sql = `
SELECT * 
FROM adresser
LEFT JOIN reviews
ON adresser.bruksenhetid = reviews.adresse_id
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST('+skurkebakken' IN BOOLEAN MODE) ORDER BY veinavn, nummer;
`

export default (req, res) => {
    res.statusCode = 200
    pool.query(sql, (err, rows, fields) => {
        res.json(rows)
    })
  }
  