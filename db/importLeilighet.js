const fs = require('fs')
const { pool } = require('../libs/database.js')

const text = fs.readFileSync('/home/hatland/projects/boligrating/db/matrikkelenAdresseLeilighetsnivaTestdata.csv').toString().split('\n')

for(const i in text) {
    const line = text[i].split(';')
    if(line[2] == 'vegadresse') {
        const sql = 
        `INSERT INTO leiligheter(
            id, 
            veinavn,
            nummer,
            bokstav,
            bruksenhetsnummer, 
            postnummer, 
            poststed, 
            kommunenavn, 
            kommunenavn_veinavn_nummer_bokstav)
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [
            line[14],
            line[6],
            line[7],
            line[8],
            line[15],
            line[21],
            line[22],
            line[1],
            line[1] + line[6] + line[7] + line[8],
        ]

        pool.query(sql, values, (err, rows, fields) => {
            if (err) {
                console.error(err)
            } else {
                console.log(rows)
            }
        })
    }
}