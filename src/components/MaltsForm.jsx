import React from "react";
import {IngredientForm} from "../pages/IngredientForm";
import {VStack} from "@chakra-ui/react";

export const MaltsForm = ({malts, setMalts}) => {
    return (
        <VStack>
            <IngredientForm
            label="Słód"
            ingredients={malts}
            setIngredients={setMalts}
            index={0}
            />
        </VStack>
    )
}
