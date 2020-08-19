import { useRouter } from 'next/router'
import useSWR from 'swr'

export default function Search({ karverketAdresser }) {
    const router = useRouter()
    const { address } = router.query
    return (
        <>
            <h1>Du har søkt på: {address}</h1>
            <h1>Karverket sier</h1>
            <ul>
                {karverketAdresser.map(({ adressetekst, postnummer, poststed }) => (
                    <li>
                        <h4>{adressetekst}</h4>
                        <p>{postnummer}</p>
                        <p>{poststed}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    // Get query from submited from
    const query = context.query.address

    // Fetch address from Firebase API
    

    // Pass data to the page via props
    return {
        props: {
            karverketAdresser
        }
    }
}