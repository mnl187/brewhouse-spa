import React, {useEffect, useState} from 'react';
import {Box, Grid, GridItem, Heading, Text} from '@chakra-ui/react';

export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/beers')
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }, []);

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Twoje przepisy
            </Heading>
            <Grid>
                {recipes.map(recipe => (
                    <GridItem key={recipe_id}>

                    </GridItem>
                ))}

            </Grid>
        </Box>
    );
};