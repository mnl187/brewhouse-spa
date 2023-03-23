import React from 'react';
import {FormControl, FormLabel, HStack, Input} from "@chakra-ui/react";

const IngredientForm = (ingredients, setIngredients, index) => {
    const handleIngredientChange = (e) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = {
            ...updatedIngredients[index],
            name: e.target.value,
        };
        setIngredients(updatedIngredients);
    }

    return (
        <HStack>
            <FormControl>
                <FormLabel>
                    <Input
                        placeholder="Nazwa składnika"
                        value={ingredients[index]?.name || ''}
                        onChange={handleIngredientChange}
                    >

                    </Input>
                </FormLabel>
            </FormControl>
        </HStack>
    )
}