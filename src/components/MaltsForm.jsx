import React from "react";
import {IngredientForm} from "../pages/IngredientForm";
import {Button, VStack} from "@chakra-ui/react";

export const MaltsForm = ({malts, setMalts}) => {
    return (
        <VStack>
            <IngredientForm
            label="Słód"
            ingredients={malts}
            setIngredients={setMalts}
            index={0}
            />
            {malts.slice(1).map((_, index) => (
                <IngredientForm
                key={index + 1}
                label={`Słód ${index + 2}`}
                ingredients={malts}
                setIngredients={setMalts}
                index={index + 1}
                />
            ))}
            <Button onClick={() => setMalts([...malts, { name: '', amount: '' }])}>
                Dodaj słód
            </Button>
        </VStack>
    )
}
