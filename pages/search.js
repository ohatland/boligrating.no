import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Searchbar from '../components/searchbar'
import Adresse from '../components/adresse'

export default function Search() {
    const { query } = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`/api/address?q=${query.address}`, fetcher)

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
                <ul>
                    {data.adresser.map((adresse) => (
                        <li key={adresse.id}>
                            <Link href="/adresse/[id]" as={`/adresse/${adresse.id}`}>
                                <div className="my-2">
                                    <Adresse adresse={adresse} />
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

