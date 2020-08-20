export default function Searchbar() {
    return (
        <div className="content-center p-8 lg:w-1/2">
            <form action="/search" method="get" className="bg-white shadow-md rounded">
                <div className="flex items-center p-1 w-full">
                    <input className="p-3 w-full" placeholder="Skurkebakken 1 Andeby" name="address" />
                    <button className="align-right p-3" type="submit">Søk</button>
                </div>
            </form>
        </div>

    )
}
