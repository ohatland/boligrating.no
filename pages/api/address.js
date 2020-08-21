import { pool } from '../../libs/database'

const sql = `
SELECT * 
FROM adresser
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST('+Byvegen+5' IN BOOLEAN MODE) 
ORDER BY veinavn, nummer, nummer_bokstav
LIMIT 10;
`

export default (req, res) => {
    pool.query(sql, (err, address, fields) => {
        if (err) {
            console.error(err)
        }
        res.statusCode = 200
        res.json(address)
    })
  }
  