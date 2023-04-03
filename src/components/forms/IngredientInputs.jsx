import React from "react";
import {VStack, Input, Flex, Text} from "@chakra-ui/react";

export const IngredientInputs = ({ingredient, keyName, index, onIngredientChange}) => {
    return (
        <VStack key={ingredient._id} align="start" spacing={2}>
            <Flex mb="2">
                <Input
                    w="100%"
                    mr="2"
                    mt="5"
                    type="text"
                    id={`${keyName}-${keyName}`}
                    name={`${keyName}-${index}`}
                    value={ingredient.name}
                    onChange={(e) => onIngredientChange(index, keyName, "name", e.target.value)}
                />
                <Flex flexDirection="column" w="50%">
                    <Text fontSize="sm" fontWeight="bold">
                        Ilość [g]
                    </Text>
                    <Input
                        type="number"
                        id={`${keyName}-${index}-amount`}
                        name={`${keyName}-${index}-amount`}
                        value={ingredient.amount}
                        onChange={(e) => onIngredientChange(index, keyName, "amount", e.target.value)}
                    />
                </Flex>
            </Flex>
        </VStack>
    );
};
