import React from "react";
import {Link} from 'react-router-dom';
import {Box, Flex, Heading, Button, Text} from '@chakra-ui/react';

export const Header = () => {
    const Divider = () => (
        <Box
            borderLeft="1px"
            borderColor="gray.300"
            height="24px"
            mx={3}
        />
    );

    return (
        <Box px="4" bg="gray.700">
            <Flex as="nav"
                  align="center"
                  justify="space-between"
                  wrap="wrap"
                  padding={{ base: "1rem", md: "2rem" }}
                  color="white"
            >
                <Heading as="h1" size="md">
                    <Box display="flex" alignItems="center">
                        <Text fontSize="xl">Brewhouse</Text>
                        <Divider />
                        <Text fontSize="xl">Twoje przepisy piwowarskie</Text>
                    </Box>
                </Heading>
                <Box>
                    <Link to="/">
                        <Button variant="outline">Strona główna</Button>
                    </Link>
                    <Link to="/add-recipe">
                        <Button ml="4" colorScheme="teal">
                            Dodaj przepis
                        </Button>
                    </Link>
                    <Link to="/view-beer-styles">
                        <Button ml="4" colorScheme="teal">
                            Wyświetl style piwne
                        </Button>
                    </Link>

                </Box>
            </Flex>
        </Box>
    );
};