import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

export const BeerStyleDetails = ({ beerStyles, selectedStyle }) => {
    const selectedBeerStyle = beerStyles.find((style) => style.name === selectedStyle);

    if (!selectedBeerStyle) {
        return (
            <Box>
                <Text color="red.500">Brak wybranego stylu piwnego</Text>
            </Box>
        );
    }

    return (
        <VStack spacing={2} alignItems="flex-start">
            <Box>
                <Text as="span" fontWeight="bold">Słód:</Text>
                <Text as="span"> OG: {selectedBeerStyle.ogmin} - {selectedBeerStyle.ogmax},</Text>
                <Text as="span"> SR: {selectedBeerStyle.srmmin} - {selectedBeerStyle.srmmax}</Text>
            </Box>
            <Box>
                <Text as="span" fontWeight="bold">Chmiel:</Text>
                <Text as="span"> IBU: {selectedBeerStyle.ibumin} - {selectedBeerStyle.ibumax}</Text>
                           </Box>
        </VStack>
    );
};