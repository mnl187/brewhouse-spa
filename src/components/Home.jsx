import { Link } from 'react-router-dom';
import { Heading, Stack, Button } from '@chakra-ui/react';

export const Home = () => {
    return (
        <Stack spacing={4} align="center">
            <Heading>Welcome to the Beer Recipe App</Heading>
            <Link to="/recipe/1">
                <Button>View Recipe</Button>
            </Link>
        </Stack>
    );
};