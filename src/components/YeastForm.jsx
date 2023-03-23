import React from "react";
import {IngredientForm} from "../pages/IngredientForm";
import {Box, Button} from "@chakra-ui/react";

export const YeastForm = ({yeast, setYeast}) => {
    return (
        <Box>
            <IngredientForm
                label="Drożdże"
                ingredients={yeast}
                setIngredients={setYeast}
                index={0}
            />
            {yeast.slice(1).map((_, index) => (
                <IngredientForm
                    key={index + 1}
                    label={`Drożdże ${index + 2}`}
                    ingredients={yeast}
                    setIngredients={setYeast}
                    index={index + 1}
                />
            ))}
            <Button onClick={() => setYeast([...yeast, { name: '', amount: '' }])}>
                Dodaj drożdze
            </Button>
        </Box>
    )
}