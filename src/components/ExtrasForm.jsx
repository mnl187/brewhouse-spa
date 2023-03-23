import React from "react";
import {IngredientForm} from "../pages/IngredientForm";
import {Box, Button} from "@chakra-ui/react";

export const ExtrasForm = ({extras, setExtras}) => {
    return (
        <Box>
            <IngredientForm
                label="Dodatki"
                ingredients={extras}
                setIngredients={setExtras}
                index={0}
            />
            {extras.slice(1).map((_, index) => (
                <IngredientForm
                    key={index + 1}
                    label={`Dodatki ${index + 2}`}
                    ingredients={extras}
                    setIngredients={setExtras}
                    index={index + 1}
                />
            ))}
            <Button onClick={() => setExtras([...extras, { name: '', amount: '' }])}>
                Dodaj dodatki
            </Button>
        </Box>
    )
}