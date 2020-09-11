import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Searchbar from '../components/searchbar'
import Stjerner from '../components/stjerner'
import style from '../styles/search.module.css'

export default function Search() {
    const { query } = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`/api/address?q=${query.address}`, fetcher)
    const arr = [1, 2, 3, 4, 5]
    if (!data) {
        return (<div></div>)
    }

    else if (error) {
        return <p>{error}</p>
    }

    if (data.adresser) {
        return (
            <div className="page">
                <Searchbar query={query.address} />
                <ul className="searchtable">
                    {data.adresser.map((adresse) => (
                        <li key={adresse.id} className="searchresult">
                            <Link href="/[id]" as={`/${adresse.id}`}>
                                <div className={style.adressekort}>
                                    <section className={style.vurdering}>
                                        <Stjerner karakter={adresse.snitt_karakter} />
                                        <p className="text-xs">{adresse.antall_reviews} vurderinger</p>
                                    </section>
                                    <section className={style.adresse}>
                                        <h3>{adresse.veinavn} {adresse.bolignummer}</h3>
                                    </section>
                                    <section className={style.stedsnavn}>
                                        <h3>{adresse.kommunenavn}</h3>
                                    </section>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Searchbar query={query.address} />
            <h3>Ingen treff</h3>
        </div>
    )
}