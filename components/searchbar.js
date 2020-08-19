export default function Searchbar() {
    return (
        <form action="/search" method="get">
            <label>
                Adresse:
                <input type="text" name="address" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}