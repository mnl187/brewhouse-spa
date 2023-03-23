import React from 'react';
import {FormControl, FormLabel, HStack, Input} from "@chakra-ui/react";

const IngredientForm = () => {
    const handleIngredientChange =(e) => {

    }

    return (
        <HStack>
            <FormControl>
                <FormLabel>
                    <Input
                    placeholder="Nazwa składnika"
                    onChange={handleIngredientChange}
                    >

                    </Input>
                </FormLabel>
            </FormControl>
        </HStack>
    )
}