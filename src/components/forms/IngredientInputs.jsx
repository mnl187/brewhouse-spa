import React from "react";
import {Input, HStack, FormControl} from "@chakra-ui/react";

export const IngredientInputs = ({ingredient, keyName, index, onIngredientChange}) => {
    return (
        <HStack key={ingredient._id} align="start" spacing={2}>
            <FormControl mb="2"  w="77%">
                <Input
                    w="100%"
                    mr="2"
                    type="text"
                    id={`${keyName}-${keyName}`}
                    name={`${keyName}-${index}`}
                    value={ingredient.name}
                    onChange={(e) => onIngredientChange(index, keyName, "name", e.target.value)}
                />
            </FormControl>
            <FormControl flexDirection="column" w="20%">
                <Input
                    type="number"
                    id={`${keyName}-${index}-amount`}
                    name={`${keyName}-${index}-amount`}
                    value={ingredient.amount}
                    onChange={(e) => onIngredientChange(index, keyName, "amount", e.target.value)}
                />
            </FormControl>
        </HStack>
    );
};
