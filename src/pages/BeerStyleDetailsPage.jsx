import React, {useEffect} from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import {useParams} from 'react-router-dom';

export const BeerStyleDetailsPage = () => {
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/beer-styles/${id}`)
    }, [id]);

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">
              Styl piwny
            </Heading>
            <Text>

            </Text>
        </Box>
    )
}