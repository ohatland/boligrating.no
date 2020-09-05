import useSWR from 'swr'
import { useRouter} from 'next/router'
import Adresse from '../../components/adresse'

export default function Page() {
    const { query } = useRouter()
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`http://localhost:3000/api/review?adresse_id=${query.id}`, fetcher)

    if (!data) {
        return (<div></div>)
    }

    else if (error) {
        return <p>{error}</p>
    }

    return (
        <div>

            <Adresse adresse={data.adresse} />

            <ul className="mb-8 mx-12 rounded-b-lg bg-gray-400">
                {data.reviews.map((review) => (
                    <li key={review.id}>
                        <div className="flex w-auto p-3">
                            <p className="flex-1">{review.karakter_total}</p>
                            <p className="flex-1">{review.kontrakt_oppsigelsestid}</p>
                            <p className="flex-1">{review.depositumskonto}</p>
                            <p className="flex-1">{review.leiepris}</p>
                            <p className="flex-1">{review.depositum}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}