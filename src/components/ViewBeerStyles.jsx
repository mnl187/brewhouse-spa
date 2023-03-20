import React, {useEffect, useState} from "react";

export const ViewBeerStyles = () => {

    const [beerStyles, setBeerStyles] = useState([]);

    useEffect(() => {
        fetch('../api/recipes')   // TODO: później zmienić na endopint z backendu
            .then((response) => response.json())
            .then((data) => setBeerStyles(data))
    },[])
    return (
        <ul>
            <li>style name</li>
        </ul>
    )
}