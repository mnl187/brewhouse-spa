import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import recipesData from '../api/recipes.json';

export const Recipes = () => {
    const [recipes, setRecipes] = useState(recipesData);

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Lista przepisów
            </Heading>
            {recipes.map(recipe => (
                <Box key={recipe.id} mb="8">
                    <Heading as="h3" size="md" mb="2">
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </Heading>
                    <Text>{recipe.description}</Text>
                </Box>
            ))}
        </Box>
    );
};