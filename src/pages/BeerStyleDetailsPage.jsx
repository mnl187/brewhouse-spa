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

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">
                {beerStyleDetails.name}
            </Heading>
            <Text>

            </Text>
        </Box>
    )
}