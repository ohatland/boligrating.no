CREATE SCHEMA boligrating;

CREATE TABLE boligrating.adresser (
    bruksenhetid INT NOT NULL PRIMARY KEY, 
    adressenavn VARCHAR(100) NOT NULL,
    nummer INT NOT NULL,
    bokstav VARCHAR(1),
    bruksenhetsnummerTekst VARCHAR(5),
    postnummer INT NOT NULL,
    poststed VARCHAR(50) NOT NULL,
    kommunenavn VARCHAR(50) NOT NULL
);

CREATE TABLE boligrating.reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dato_review DATE NOT NULL,
    adresse_id INT NOT NULL REFERENCES adresser(bruksenhetid),

    karakter_total ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakter_bygg ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakter_pris ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakter_utleier ENUM('1', '2', '3', '4', '5') NOT NULL,

    navn_utleier VARCHAR(100) NOT NULL,
    kontrakt_oppsigelsestid ENUM('1', '2', '3', '3+', 'ingen') NOT NULL,
    depositumskonto TINYINT NOT NULL,
    leiepris INT NOT NULL,
    depositum INT NOT NULL,

    leie_fra DATE NOT NULL,
    leie_til DATE NOT NULL,
    boAlene TINYINT NOT NULL,
    telefonnummer_reviewer VARCHAR(11) NOT NULL,
    godkjent TINYINT NOT NULL
);