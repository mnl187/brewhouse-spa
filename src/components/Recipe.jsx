import { useParams } from 'react-router-dom';
import { Heading, Text, Stack } from '@chakra-ui/react';

export const Recipe = () => {
    const { id } = useParams();

    return (
        <Stack spacing={4}>
            <Heading>Recepta {id}</Heading>
            <Text>To jest recepta na piwo:{id}.</Text>
        </Stack>
    );
};