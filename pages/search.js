import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from '../libs/fetch'
import Searchbar from '../components/searchbar'
import Header from '../components/header'

export default function Search() {
    // get query from searchbar
    const querystring = useRouter().query.address
    
    const { data, error } = useSWR(`/api/address?q=${querystring}`, fetch)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    if (data.address)
    return (
        <div>
            <Header />
            <Searchbar query={querystring} />
            <ul>
                {data.address.map((address) => (
                    <li key={address.id}>
                        <div className="flex w-auto bg-gray-200 p-3 m-8 shadow-lg rounded-lg">
                            <p className="flex-1">{address.karakter_total}</p>
                            <p className="flex-1">{address.veinavn}</p>
                            <p className="flex-1">{address.nummer_bokstav}</p>
                            <p className="flex-1 text-pink-500">{address.poststed}</p>
                        </div>
                    </li>                    
                ))}
            </ul>
        </div>
    )

    return (
        <div>
            <Header />
            <Searchbar query={querystring} />
            <h3>Ingen søk idag</h3>
        </div>
    )
}

/*
            <ul>
                {data.address.map((address) => (
                    <li key={address.id}>
                        <div className="flex w-auto bg-gray-200 p-3 m-8 shadow-lg rounded-lg">
                            <p className="flex-1">{address.karakter_total}</p>
                            <p className="flex-1">{address.veinavn}</p>
                            <p className="flex-1">{address.nummer_bokstav}</p>
                            <p className="flex-1 text-pink-500">{address.poststed}</p>
                        </div>
                    </li>                    
                ))}
            </ul>
*/