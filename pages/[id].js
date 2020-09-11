import useSWR from 'swr'
import { useRouter } from 'next/router'
import Utsagn from '../components/vurdering-utsagn'
import Stjerner from '../components/stjerner'

export default function Page() {
    const { query } = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`http://localhost:3000/api/review?adresse_id=${query.id}`, fetcher)


    if (!data) {
        return (<div>Her var det vist ingenting</div>)
    }

    else if (error) {
        return (<p>{error}</p>)
    }

    return (
        <div className="page">

            <div className="idadresse">
                <h3 className="grid-adresse">{data.adresse.veinavn} {data.adresse.bolignummer}</h3>
                <h4 className="grid-by">{fixCase(data.adresse.kommunenavn)}</h4>
                <h4 className="grid-poststed">{data.adresse.postnummer} {fixCase(data.adresse.poststed)}</h4>

                <div className="idkarakter grid-score">
                    <div>
                        <h5>Totalt</h5>
                        <Stjerner karakter={data.adresse.snitt_karakter} />
                    </div>

                    <div>
                        <h5>Bygg</h5>
                        <Stjerner karakter={data.adresse.snitt_karakter_bygg} />
                    </div>

                    <div>
                        <h5>Pris</h5>
                        <Stjerner karakter={data.adresse.snitt_karakter_pris} />
                    </div>

                    <div>
                        <h5>Utleier</h5>
                        <Stjerner karakter={data.adresse.snitt_karakter_utleier} />
                    </div>

                </div>
            </div>

            <ul>
                {data.reviews.map((review) => (
                    <li key={review.id}>
                        <div className="idvurdering">
                            <h3 className="grid-tittel">Tittel for tilbakemelding</h3>
                            <h4 className="grid-bodde-i">Bodde i leilighet xx</h4>
                            <h4 className="grid-skrevet-ar">Skrevet i 20XX</h4>

                            <div className="idkarakter grid-score">
                                <div>
                                    <h5>Totalt</h5>
                                    <Stjerner karakter={data.adresse.snitt_karakter} />
                                </div>

                                <div>
                                    <h5>Bygg</h5>
                                    <Stjerner karakter={data.adresse.snitt_karakter_bygg} />
                                </div>

                                <div>
                                    <h5>Pris</h5>
                                    <Stjerner karakter={data.adresse.snitt_karakter_pris} />
                                </div>

                                <div>
                                    <h5>Utleier</h5>
                                    <Stjerner karakter={data.adresse.snitt_karakter_utleier} />
                                </div>
                            </div>

                            <p className="grid-tekst p-6 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <Utsagn tekst={"God tone med huseier"} utsagn={false}/>
                            <Utsagn tekst={"Bolig er fri for mugg"} utsagn={false}/>
                            <Utsagn tekst={"Kontrakt med oppsigelsestid"} utsagn={false}/>
                            <Utsagn tekst={"Utleier er flink til å fikse ting"} utsagn={false}/>
                            <Utsagn tekst={"Depositumskonto"} utsagn={false}/>
                            <Utsagn tekst={"Naboen har lavt støynivå"} utsagn={false}/>
                            <Utsagn tekst={"Lett å få tilbake depositum"} utsagn={false}/>
                            <Utsagn tekst={"God lydisolasjon mellom rom"} utsagn={false}/>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function fixCase(str) {
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
}
