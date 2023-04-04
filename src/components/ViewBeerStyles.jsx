import React, {useEffect, useState} from "react";
import {Heading, Input} from "@chakra-ui/react";
import {Grid, GridItem, Text} from '@chakra-ui/react';

export const ViewBeerStyles = () => {

    const [beerStyles, setBeerStyles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch('http://localhost:5000/beer-styles')
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
                <Grid  templateColumns="repeat(auto-fill, minmax(350px, 1fr))" gap={6}>
                    {filteredBeerStyles.map((style) => (
                        <GridItem key={style.name} p={4} borderWidth={1} borderRadius="lg">
                            <Text>
                                Nazwa stylu piwnego: <br/>
                                <Heading as="h4" size="md">
                                    <strong>{style.name}</strong>
                                </Heading>
                            </Text>
                            <Text>
                                Kategoria: <br/>
                                <strong>{style.category}</strong>
                            </Text>
                        </GridItem>
                    ))}
                </Grid>
        </div>

    )
}