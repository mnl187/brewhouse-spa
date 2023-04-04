import React, {useEffect, useState} from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import {useParams} from 'react-router-dom';

export const BeerStyleDetailsPage = () => {
    const {id} = useParams();
    const [beerStyleDetails, setBeerStyleDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/beer-styles/${id}`)
            .then((response) => response.json())
            .then((data) => setBeerStyleDetails(data))
    }, [id]);

    if (!beerStyleDetails) {
        return <Text>Wczytywanie...</Text>;
    }

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">
                Nazwa: {beerStyleDetails.name}
            </Heading>
            <Text>
                Numer: {beerStyleDetails.number}
            </Text>
            <Text>
                Kategoria: {beerStyleDetails.category}
            </Text>
        </Box>
    )
}