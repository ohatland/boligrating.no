import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from '../libs/fetch'
import Searchbar from '../components/searchbar'
import Header from '../components/header'

export default function Search({ karverketAdresser }) {
    const { address } = useRouter().query
    const { data, error } = useSWR('/api/address', fetch)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <Header />
            <Searchbar />
            <ul>
                <ul>
                {data.map((address) => (
                        <li key={address.bruksenhetid}>
                            <div className="w-4/6 bg-gray-200 p-1 m-1">
                                <h4>{address.veinavn}</h4>
                                <p>{address.nummer}</p>
                                <p>{address.poststed}</p>
                            </div>
                        </li>                    
                ))}
            </ul>
            </ul>
        </div>
    )
}