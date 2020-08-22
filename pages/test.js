import Header from '../components/header'
import useSWR from 'swr'
import fetch from '../libs/fetch'

export default function Test() {
    const { data, error } = useSWR(`/api/hello`, fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    
    return (
        <div>
            <Header />
            <p>{data.name}</p>
        </div>
      )
}