import React from "react";
import {VStack, Input} from "@chakra-ui/react";

export const IngredientInputs = ({ingredient, keyName, index, onIngredientChange}) => {
    return (
        <VStack key={ingredient._id} align="start" spacing={2}>
            <Input
                w="25vw"
                type="text"
                id={`${keyName}-${keyName}`}
                name={`${keyName}-${index}`}
                value={ingredient.name}
                onChange={(e) => onIngredientChange(index, keyName, "name", e.target.value)}
            />
            <Input
                w="25vw"
                type="text"
                id={`${keyName}-${index}-amount`}
                name={`${keyName}-${index}-amount`}
                value={ingredient.amount}
                onChange={(e) => onIngredientChange(index, keyName, "amount", e.target.value)}
                />
        </VStack>
    );
};
