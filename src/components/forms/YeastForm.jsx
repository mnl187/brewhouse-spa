import React from "react";
import {IngredientForm} from "./IngredientForm";
import {Box, Button} from "@chakra-ui/react";
import {PlusSquareIcon} from "@chakra-ui/icons";

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
            <Button colorScheme="teal" mt={4} mb={4} onClick={() => setYeast([...yeast, { name: '', amount: '' }])}>
                <PlusSquareIcon mr={2}/>
                Dodaj drożdze
            </Button>
        </Box>
    )
}