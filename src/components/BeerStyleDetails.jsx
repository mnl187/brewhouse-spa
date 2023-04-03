import React from 'react';
import {Box, VStack, Text, Heading} from '@chakra-ui/react';

export const BeerStyleDetails = ({beerStyles, selectedStyle}) => {
    const selectedBeerStyle = beerStyles.find((style) => style.name === selectedStyle);

    if (!selectedBeerStyle) {
        return (
            <Box>
                <Text color="red.500">Brak wybranego stylu piwnego</Text>
            </Box>
        );
    }

    return (
        <VStack alignItems="flex-start">
            <Heading as="h" size="md" mb="2">
                Parametry stylu
            </Heading>
            <Box borderWidth={1} borderRadius="lg" p={4} spacing={2} minW="400px">
                <Box>
                    <Text as="span" fontWeight="bold">Słód:</Text>
                    <Text as="span"> OG: {selectedBeerStyle.ogmin} - {selectedBeerStyle.ogmax},</Text>
                    <Text as="span"> Barwa: {selectedBeerStyle.srmmin} - {selectedBeerStyle.srmmax}</Text>
                </Box>
                <Box>
                    <Text as="span" fontWeight="bold">Chmiel:</Text>
                    <Text as="span"> IBU: {selectedBeerStyle.ibumin} - {selectedBeerStyle.ibumax}</Text>
                </Box>
                <Box>
                    <Text as="span" fontWeight="bold">Alkohol:</Text>
                    <Text as="span"> ABV: {selectedBeerStyle.abvmin}% - {selectedBeerStyle.abvmax}%</Text>
                </Box>
            </Box>
        </VStack>
    );
};