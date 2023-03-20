import React, {useEffect, useState} from "react";

export const ViewBeerStyles = () => {

    const [beerStyles, setBeerStyles] = useState([]);

    useEffect(() => {
        fetch('/data/beerStyles.json')   // TODO: później zmienić na endopint z backendu
            .then((response) => response.json())
            .then((data) => setBeerStyles(data))
    },[])
    return (
        <ul>
            {beerStyles.map((style) => (
                <li key={style.name}>
                    Nazwa stylu piwnego: <strong>{style.name}</strong><br/>
                    Kategoria: <strong>{style.category}</strong><br/>
                     <br/>
                </li>
            ))}

        </ul>
    )
}