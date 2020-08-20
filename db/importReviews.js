const fs = require('fs')
const { pool } = require('../libs/database.js')

const text = fs.readFileSync('/home/hatland/projects/boligrating/db/reviewsTestdata.csv').toString().split('\n')

for(const i in text) {
    const line = text[i].split(';')
    if(line[0] != 'dato_reviews') {
        // ;;;;;;;;;;;;;;;

        const sql = `INSERT INTO reviews(
                dato_review, 
                adresse_id,
                karakter_total,
                karakter_bygg,
                karakter_pris,
                karakter_utleier,
                navn_utleier,
                kontrakt_oppsigelsestid,
                depositumskonto,
                leiepris,
                depositum,
                leie_fra,
                leie_til,
                bo_alene,
                telefonnummer_reviewer,
                godkjent
            )   
        VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        
        const values = [
            line[0],
            line[1],
            line[2],
            line[3],
            line[4],
            line[5],
            line[6],
            line[7],
            line[8],
            line[9],
            line[10],
            line[11],
            line[12],
            line[13],
            line[14],
            line[15],
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