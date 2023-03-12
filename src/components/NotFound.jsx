import { Heading, Text, Stack } from '@chakra-ui/react';

export const NotFound = () => {
    return (
        <Stack spacing={4}>
            <Heading>404 Not Found</Heading>
            <Text>The page you are looking for does not exist.</Text>
        </Stack>
    );
};