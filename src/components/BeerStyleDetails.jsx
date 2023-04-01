import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

export const BeerStyleDetails = ({ beerStyles, selectedStyle }) => {
    const selectedBeerStyle = beerStyles.find((style) => style.name === selectedStyle);

    if (!selectedBeerStyle) {
        return null;
    }

    return (
        <VStack spacing={2} alignItems="flex-start">
            <Box>
                <Text as="span" fontWeight="bold">Słód:</Text>
                <Text as="span"> OGmin: {selectedBeerStyle.ogmin},</Text>
                <Text as="span"> OGmax: {selectedBeerStyle.ogmax},</Text>
                <Text as="span"> SRMmin: {selectedBeerStyle.srmmin},</Text>
                <Text as="span"> SRMmax: {selectedBeerStyle.srmmax}</Text>
            </Box>
            <Box>
                <Text as="span" fontWeight="bold">Chmiel:</Text>
                <Text as="span"> IBUmin: {selectedBeerStyle.ibumin},</Text>
                <Text as="span"> IBUmax: {selectedBeerStyle.ibumax}</Text>
            </Box>
        </VStack>
    );
};
