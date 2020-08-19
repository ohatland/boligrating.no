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
    datoReview DATE NOT NULL,
    adresseid INT NOT NULL REFERENCES adresser(bruksenhetid),

    karakterTotal ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakterBygg ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakterPris ENUM('1', '2', '3', '4', '5') NOT NULL,
    karakterUtleier ENUM('1', '2', '3', '4', '5') NOT NULL,

    navnUtleier VARCHAR(100) NOT NULL,
    kontraktOppsigelsestid ENUM('1', '2', '3', '3+', 'ingen') NOT NULL,
    depositumskonto TINYINT NOT NULL,
    leiepris INT NOT NULL,
    depositum INT NOT NULL,

    leieFra DATE NOT NULL,
    leieTil DATE NOT NULL,
    boAlene TINYINT NOT NULL,
    telefonnummerTilbakemelder VARCHAR(11) NOT NULL,
    godkjent TINYINT NOT NULL
);