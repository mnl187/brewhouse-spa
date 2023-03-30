import React from 'react';
import { Box } from '@chakra-ui/react';
import { RecipeForm } from './forms/RecipeForm';

export const AddRecipe = ({ addRecipe }) => {
    const handleSubmit = async (recipe) => {
        try {
            const response = await fetch('http://localhost:5000/beers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe),
            });
            const newBeer = await response.json();
            console.log('Dodano nowy przepis:', newBeer);
        } catch (error) {
            console.error('Błąd podczas dodawania przepisu:', error);
        }
    };

    return (
        <Box>
            <RecipeForm onSubmit={handleSubmit} />
        </Box>
    );
};