import React from 'react';
import {FormControl, FormLabel, HStack, Input} from "@chakra-ui/react";

export const IngredientForm = ({ingredients, setIngredients, index, label}) => {
    const handleIngredientChange = (e) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            name: e.target.value,
        };
        setIngredients(updatedIngredients);
    };

    const handleAmountChange = (e) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            amount: e.target.value,
        };
        setIngredients(updatedIngredients);
    }

    return (
        <HStack>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input
                    placeholder="Nazwa składnika"
                    value={ingredients[index]?.name || ''}
                    onChange={handleIngredientChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Ilość [g]</FormLabel>
                <Input
                    w="7vw"
                    type="number"
                    placeholder="Ilość w gramach"
                    value={ingredients[index]?.amount || ''}
                    onChange={handleAmountChange}
                />
            </FormControl>
        </HStack>
    )
}