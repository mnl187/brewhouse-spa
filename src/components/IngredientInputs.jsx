import React from "react";
import {VStack, Input} from "@chakra-ui/react";

export const IngredientInputs = (ingredient) => {
    return (
        <VStack>
            <Input
                w="25vw"
                type="text"
                value={ingredient.name}
            />
            <Input
                w="25vw"
                type="text"
                value={ingredient.name}/>
        </VStack>
    );
};
