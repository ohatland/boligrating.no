import Searchbar from '../components/searchbar'

export default function Home() {
  return (
    <div className="bg-small">

      <div className="px-10 pt-20">
        <h3 className="font-semibold italic text-white text-3xl">Finn seriøse utleiere</h3>
        <p className="text-gray-200 text-base">Søk i vår database med oversikt over tidligere leieboeres erfaringer</p>
      </div>
      
      <Searchbar />
    </div>
  )
}
