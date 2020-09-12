import pool from '../../libs/database'

const sql = 'call legg_til_vurdering(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

export default async (req, res) => {

    const params = [
        1, // adresse_id
        req.body.navn_forfatter,
        req.socket.remoteAddress,
        req.headers['user-agent'],
        req.body.telefon_forfatter,
        req.body.leie_fra,
        req.body.leie_til,
        req.body.bo_alene,
        req.body.leiepris,
        req.body.depositum,
        req.body.navn_utleier,
        req.body.tittel_vurdering,
        req.body.bodde_i_leilighet,
        req.body.tekst_vurdering,
        req.body.karakter_totalt,
        req.body.karakter_bygg,
        req.body.karakter_pris,
        req.body.karakter_utleier,
        req.body.god_tone_med_utleier,
        req.body.bolig_fri_fra_mugg,
        req.body.kontrakt_med_oppsigelsestid,
        req.body.utleier_er_flink_til_a_fikse_ting,
        req.body.depositumskonto,
        req.body.nabo_har_lavt_stoyniva,
        req.body.lett_a_fa_tilbake_depositum,
        req.body.god_lydisolasjon_mellom_rom
    ]

    const [rows] = await pool.query(sql, params)

    res.statusCode = 200
    res.json({
        data: req.body,
        input: params,
        db: rows
    })


}