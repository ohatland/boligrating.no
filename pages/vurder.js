export default function Vurder() {
    return (
        <div className="page">
            <form action="/api/ny-vurdering" method="post">

                <label htmlFor="navn_forfatter">Ditt navn</label>
                <input type="text" id="navn_forfatter" name="navn_forfatter"/><br />

                <label htmlFor="telefon_forfatter">Telefon nummer</label>
                <input type="text" id="telefon_forfatter" name="telefon_forfatter" /><br />
                
                <label htmlFor="leie_fra">Leie fra dato</label>
                <input type="date" id="leie_fra" name="leie_fra" /><br />

                <label htmlFor="leie_til">Leie til dato</label>
                <input type="date" id="leie_til" name="leie_til" /><br />

                <label htmlFor="bo_alene">Bodde du alene i boenheten</label>
                <input type="checkbox" id="bo_alene" name="bo_alene" value="1" /><br />

                <label htmlFor="leiepris">Leiepris</label>
                <input type="text" id="leiepris" name="leiepris" /><br />

                <label htmlFor="depositum">Depositum</label>
                <input type="text" id="depositum" name="depositum" /><br />

                <label htmlFor="navn_utleier">Navnet til utleier</label>
                <input type="text" id="navn_utleier" name="navn_utleier" /><br />

                <label htmlFor="tittel_vurdering">Tittel vurdering</label>
                <input type="text" id="tittel_vurdering" name="tittel_vurdering" /><br />

                <label htmlFor="bodde_i_leilighet">Navn på boenhet / leilighet</label>
                <input type="text" id="bodde_i_leilighet" name="bodde_i_leilighet" /><br />

                <label htmlFor="tekst_vurdering">Din vurdering</label>
                <input type="text" id="tekst_vurdering" name="tekst_vurdering" /><br />

                <label htmlFor="karakter_total">Karakter totalt</label>
                <input type="range" id="karakter_totalt" name="karakter_totalt" min="1" max="5" /><br />
                
                <label htmlFor="karakter_bygg">Karakter bygg</label>
                <input type="range" id="karakter_bygg" name="karakter_bygg" min="1" max="5" /><br />
                
                <label htmlFor="karakter_pris">Karakter pris</label>
                <input type="range" id="karakter_pris" name="karakter_pris" min="1" max="5" /><br />
                
                <label htmlFor="karakter_utleier">Karakter utleier</label>
                <input type="range" id="karakter_utleier" name="karakter_utleier" min="1" max="5" /><br />

                <label htmlFor="god_tone_med_utleier">God tone med utleier</label>
                <input type="checkbox" id="god_tone_med_utleier" name="god_tone_med_utleier" value="1" /><br />

                <label htmlFor="bolig_fri_fra_mugg">Bolig fri for mugg</label>
                <input type="checkbox" id="bolig_fri_fra_mugg" name="bolig_fri_fra_mugg" value="1" /><br />

                <label htmlFor="kontrakt_med_oppsigelsestid">Kontrakt med oppsigelsestid</label>
                <input type="checkbox" id="kontrakt_med_oppsigelsestid" name="kontrakt_med_oppsigelsestid" value="1" /><br />

                <label htmlFor="utleier_er_flink_til_a_fikse_ting">Utleier er flink til å fikse ting</label>
                <input type="checkbox" id="utleier_er_flink_til_a_fikse_ting" name="utleier_er_flink_til_a_fikse_ting" value="1" /><br />

                <label htmlFor="depositumskonto">Depositumskonto</label>
                <input type="checkbox" id="depositumskonto" name="depositumskonto" value="1" /><br />

                <label htmlFor="nabo_har_lavt_stoyniva">Nabo har lavt støynivå</label>
                <input type="checkbox" id="nabo_har_lavt_stoyniva" name="nabo_har_lavt_stoyniva" value="1" /><br />

                <label htmlFor="lett_a_fa_tilbake_depositum">Lett å få tilbake depositum</label>
                <input type="checkbox" id="lett_a_fa_tilbake_depositum" name="lett_a_fa_tilbake_depositum" value="1" /><br />

                <label htmlFor="god_lydisolasjon_mellom_rom">God lydisolasjon mellom rom</label>
                <input type="checkbox" id="god_lydisolasjon_mellom_rom" name="god_lydisolasjon_mellom_rom" value="1" /><br />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}