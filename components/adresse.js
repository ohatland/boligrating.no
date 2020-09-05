export default function Adresse({ adresse }) {

    const arr = [1, 2, 3, 4, 5]
    return (
            <div className="adresse">
                <div className="vurderinger">
                    <div className="stjerner">
                        {arr.map((num) => {
                            if (adresse.snitt_karakter >= num - 0.5) { return (<i class="fas fa-star h-4"></i>) }
                            else if (adresse.snitt_karakter >= num - 1 && num - adresse.snitt_karakter < 1) { return (<i class="fas fa-star-half-alt h-4"></i>) }
                            else { return (<i class="far fa-star h-4"></i>) }
                        })}
                    </div>
                    <p className="text-xs">{adresse.antall_reviews} vurderinger</p>
                </div>
                <div className="adresseText">
                        <p>{adresse.veinavn} {adresse.bolignummer}</p>
                        <p className="text-xs capitalize">{(adresse.poststed).toLowerCase()}</p>
                </div>
                <div className="stedsnavn">
                    <p>{adresse.kommunenavn}</p>
                </div>
            </div>
    )
}

function fixPostName(name) {
    return name.toLowerCase()
}