import { Link } from 'react-router-dom';
import { Stack, Button } from '@chakra-ui/react';
import { RecipesList } from './RecipesList';

export const Home = () => {
    return (
        <Stack spacing={4} align="center">
            <RecipesList />
            <Link to="/add-recipe">
                <Button>Dodaj przepis</Button>
            </Link>
        </Stack>
    );
};