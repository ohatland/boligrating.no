import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from '../libs/fetch'
import Searchbar from '../components/searchbar'
import Header from '../components/header'

export default function Search({ karverketAdresser }) {
    // get query from searchbar
    const { address } = useRouter().query

    const { data, error } = useSWR('/api/address', fetch)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <Header />
            <Searchbar query={address} />
            <ul>
                <ul>
                {data.map((address) => (
                    <li key={address.bruksenhetid}>
                        <div className="flex w-auto bg-gray-200 p-3 m-8 shadow-lg rounded-lg">
                            <p className="flex-1">{address.karakter_total}</p>
                            <p className="flex-1">{address.veinavn}</p>
                            <p className="flex-1">{address.nummer_bokstav}</p>
                            <p className="flex-1 text-pink-500">{address.poststed}</p>
                        </div>
                    </li>                    
                ))}
            </ul>
            </ul>
        </div>
    )
}