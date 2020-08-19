import fs from 'fs'
import { pool } from '../config/database.js'

const text = fs.readFileSync('/home/hatland/projects/boligrating/db/adresserTestdata.csv').toString().split('\n')

for(const i in text) {
    const line = text[i].split(';')
    if(line[2] == 'vegadresse') {
        const obj = {
            bruksenhetid: line[14],
            adressenavn: line[6],
            nummer: line[7],
            bokstav: line[8],
            bruksenhetsnummerTekst: line[15],
            postnummer: line[21],
            poststed: line[22],
            kommunenavn: line[1],
        }
        writeToDatabase(obj)
    }
}

function writeToDatabase(obj) {
    pool.getConnection((err, connection) => {
        try {
            const sql = `INSERT INTO adresser(
                bruksenhetid, 
                adressenavn, 
                nummer, 
                bokstav, 
                bruksenhetsnummerTekst, 
                postnummer, 
                poststed, 
                kommunenavn) 
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                obj.bruksenhetid,
                obj.adressenavn,
                obj.nummer,
                obj.bokstav,
                obj.bruksenhetsnummerTekst,
                obj.postnummer,
                obj.postnummer,
                obj.kommunenavn
            ]
            // execute query
            connection.query(sql, values)
            console.log("Added to database: ", obj)
        } catch (error) {
            console.error(error)
        } finally {
            connection.release()
        }
    })
}
