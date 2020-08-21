import { pool } from '../../libs/database'

const sql = `
SELECT * 
FROM adresser
WHERE MATCH(veinavn, nummer_bokstav, poststed, kommunenavn) 
AGAINST(? IN BOOLEAN MODE) 
ORDER BY veinavn, nummer, nummer_bokstav
LIMIT 7;
`

export default (req, res) => {
    // TODO - serialize input
    // inserts '+' to work with BOOLEAN search mode in mysql
    const search = '+' + req.query.search.split(' ').join('+')
    
    pool.query(sql, [search], (err, address, fields) => {
        if (err) {
            console.error(err)
        }
        res.statusCode = 200
        res.json(address)
    })
  }