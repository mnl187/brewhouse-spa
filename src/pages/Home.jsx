import { Link } from 'react-router-dom';
import { Heading, Stack, Button } from '@chakra-ui/react';
import {RecipesList} from '../components/RecipesList';

export const Home = () => {
    return (
        <Stack spacing={4} align="center">
            <Heading>Witam w Brewhouse, aplikacji piwowarskiej</Heading>
            <RecipesList /> {/* Wyświetl listę przepisów */}
            <Link to="/add-recipe">
                <Button>Dodaj przepis</Button>
            </Link>
        </Stack>
    );
};