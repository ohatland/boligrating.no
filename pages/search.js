import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Searchbar from '../components/searchbar'
import Adresse from '../components/adresse'

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
            <div>
                <Searchbar query={query.address} />
                <ul className="searchtable">
                    {data.adresser.map((adresse) => (
                        <li key={adresse.id} className="searchresult">
                            <Link href="/adresse/[id]" as={`/adresse/${adresse.id}`}>
                                <div className="adresse">
                                    <div className="vurderinger">
                                        <div className="stjerner">
                                            {arr.map((num) => {
                                                if (adresse.snitt_karakter >= num - 0.5) { return (<i class="fas fa-star h-4"></i>) }
                                                else if (adresse.snitt_karakter >= num - 1 && num - adresse.snitt_karakter < 1) { return (<i class="fas fa-star-half-alt h-4"></i>) }
                                                else { return (<i class="far fa-star h-4"></i>) }
                                            })}
                                        </div>
                                        <p className="text-xs">{adresse.antall_reviews} vurderinger</p>
                                    </div>
                                    <div className="adresseText">
                                        <p>{adresse.veinavn} {adresse.bolignummer}</p>
                                        <p className="text-xs capitalize">{(adresse.poststed).toLowerCase()}</p>
                                    </div>
                                    <div className="stedsnavn">
                                        <p>{adresse.kommunenavn}</p>
                                    </div>
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


function fixPostName(name) {
    return name.toLowerCase()
}