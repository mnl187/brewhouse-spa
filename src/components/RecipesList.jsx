import React, {useEffect, useState} from 'react';
import {Box, Grid, GridItem, Heading, Text} from '@chakra-ui/react';

export const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/beers')
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }, []);

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">
                Twoje przepisy
            </Heading>
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                {recipes.map((recipe) => (
                    <GridItem key={recipe._id} borderWidth={1} borderRadius="lg" p={4}>
                        <Heading  as="h3" size="md" mb={3}>
                            {recipe.name} - {recipe.selectedStyle}
                        </Heading>
                        <Text fontWeight="bold">Słody:</Text>
                        {recipe.malts.map((malt, index) => (
                            <Text key={index}>
                                {malt.name}: {malt.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Chmiele:</Text>
                        {recipe.hops.map((hop, index) => (
                            <Text key={index}>
                                {hop.name}: {hop.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Drożdże:</Text>
                        {recipe.yeast.map((yeast, index) => (
                            <Text key={index}>
                                {yeast.name}: {yeast.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Dodatkowe składniki:</Text>
                        {recipe.extras.map((extra, index) => (
                            <Text key={index}>
                                {extra.name}: {extra.amount} g
                            </Text>
                        ))}
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};