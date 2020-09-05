import Searchbar from '../components/searchbar'

export default function Home() {
  return (
    <>
      <h1 className="logo">Boligrating.no</h1>

      <Searchbar />

      <div className="m-4 flex flex-col justify-center">
        <h3 className="font-semibold italic max-width">Finn seriøse utleiere</h3>
        <p className="max-width">Søk i vår database med oversikt over tidligere leieboeres erfaringer</p>
      </div>
      
    </>
  )
}
