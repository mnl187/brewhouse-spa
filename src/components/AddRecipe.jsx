import React from 'react';
import { Box } from '@chakra-ui/react';
import { RecipeForm } from './RecipeForm';

export const AddRecipe = ({ addRecipe }) => {
    const handleSubmit = (recipe) => {
        addRecipe(recipe);
    };

    return (
        <Box>
            <RecipeForm onSubmit={handleSubmit} />
        </Box>
    );
};