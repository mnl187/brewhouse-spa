import React, {useEffect, useState} from "react";
import {Input} from "@chakra-ui/react";

export const ViewBeerStyles = () => {

    const [beerStyles, setBeerStyles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('/data/beerStyles.json')   // TODO: później zmienić na endopint z backendu
            .then((response) => response.json())
            .then((data) => setBeerStyles(data))
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBeerStyles = beerStyles.filter((style) =>
        style.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Input
                placeholder="Wyszukaj styl piwny"
                value={searchTerm}
                onChange={handleSearch}
                mb={4}

            />
            <ul>
                {filteredBeerStyles.map((style) => (
                    <li key={style.name}>
                        Nazwa stylu piwnego: <strong>{style.name}</strong><br/>
                        Kategoria: <strong>{style.category}</strong><br/>
                        <br/>
                    </li>
                ))}

            </ul>
        </div>

    )
}