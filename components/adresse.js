export default function Adresse(props) {
    return (
            <div className="flex w-auto bg-gray-200 p-3 m-10 shadow-lg rounded-lg">
                <p className="flex-1">{oneDesimal(props.adresse.snitt_karakter)}</p>
                <p className="flex-1">{props.adresse.veinavn}</p>
                <p className="flex-1">{props.adresse.bolignummer}</p>
                <p className="flex-1">{props.adresse.kommunenavn}</p>
            </div>
    )
}

function oneDesimal(num) {
    if (num) return Number.parseFloat(num).toFixed(1)
}