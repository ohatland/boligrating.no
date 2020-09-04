import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Searchbar from '../components/searchbar'
import Adresse from '../components/adresse'

export default function Search({ data, querystring }) {

    if (data.adresser) {
        return (
            <div>
                <Searchbar query={querystring} />
                <ul>
                    {data.adresser.map((adresse) => (
                        <li key={adresse.id}>
                            <Link href="/adresse/[id]" as={`/adresse/${adresse.id}`}>
                                <div>
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
            <Searchbar query={querystring} />
            <h3>Ingen treff</h3>
        </div>
    )
}

export async function getServerSideProps(context) {

    let props

    await fetch(`http://localhost:3000/api/address?q=${context.query.address}`)
        .then(r => r.json())
        .then(data => {
            props = {
                data,
                querystring: context.query.address
            }
        })

    return { props }
}