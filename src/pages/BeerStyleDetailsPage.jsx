import React, {useEffect, useState} from "react";
import {Grid, GridItem, Heading, Text} from "@chakra-ui/react";
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
        <Grid templateRows='repeat(3, 1fr)' gap={2}>
            <GridItem colSpan={1} mx="auto" pt="8" colEnd="auto" justifySelf="end">
                <Heading as="h2" size="lg" mb="4">
                    nazwa: {beerStyleDetails.name}
                </Heading>
            </GridItem>
            <GridItem colSpan={1} mx="auto" colEnd="auto" justifySelf="end">
                <Text>
                    <strong>Kategoria:</strong> {beerStyleDetails.category}
                </Text>
                <Text as="span"> ABV: {beerStyleDetails.abvmin}% - {beerStyleDetails.abvmax}%</Text>
                <Text as="span"> IBU: {beerStyleDetails.ibumin} - {beerStyleDetails.ibumax}</Text>
                <Text as="span"> OG: {beerStyleDetails.ogmin} - {beerStyleDetails.ogmax}, </Text>
                <Text as="span"> FG: {beerStyleDetails.fgmin} - {beerStyleDetails.fgmax}, </Text>
                <Text as="span"> Barwa: {beerStyleDetails.srmmin} - {beerStyleDetails.srmmax}</Text>
            </GridItem>
            <GridItem colSpan={1} mx="auto" colEnd="auto" justifySelf="end">
                <Text>
                    <strong>Wygląd:</strong> {beerStyleDetails.appearance}
                </Text>
                <Text>
                    <strong>Smak:</strong> {beerStyleDetails.flavor}
                </Text>
                <Text>
                    <strong>Składniki:</strong> {beerStyleDetails.characteristicingredients}
                </Text>
                <Text>
                    <strong>Instrukcje:</strong> {beerStyleDetails.entryinstructions}
                </Text>
            </GridItem>
        </Grid>
    )
}