import React from "react";
import {Link} from 'react-router-dom';
import {Box, Flex, Heading, Button} from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box bg="gray.100" px="4">
            <Flex as="nav"
                  align="center"
                  justify="space-between"
                  wrap="wrap"
                  padding={{ base: "1rem", md: "2rem" }}
                  bg="gray.800"
                  color="white"
            >
                <Heading as="h1" size="md">
                    Przepisy piwowarskie
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
                </Box>
            </Flex>
        </Box>
    );
};