import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetch from '../libs/fetch'
import Searchbar from '../components/searchbar'
import Header from '../components/header'

export default function Search() {
    // get query from searchbar
    const querystring = useRouter().query.address
    
    /**
     * if nothing
     *      return ingen resultat
     * 
     * if one address
     *      if bolig
     *          return address info with score and reivews, one for each line
     *
     *       if apartment
     *          return address info with apartments overview?
     * 
     * if multiple addresses
     *      if bolig
     *          return address info with score
     * 
     *      if apartment
     *          return address info marked as apartment 
     * 
     */

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