import React from "react";
import {Link as ChakraLink, Box, Flex, Heading} from '@chakra-ui/react';


export const Header = () => {
    return (
        <Box>
            <Flex>
                <ChakraLink>
                    <Heading>
                        Piwowarskie przepisy
                    </Heading>
                </ChakraLink>
            </Flex>
        </Box>
    )
}