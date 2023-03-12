import { Link } from 'react-router-dom';
import { Heading, Stack, Button } from '@chakra-ui/react';

export const Home = () => {
    return (
        <Stack spacing={4} align="center">
            <Heading>Witam w Brewhouse, apliakacji piwowarskiej</Heading>
            <Link to="/recipe/1">
                <Button>Recepta</Button>
            </Link>
        </Stack>
    );
};