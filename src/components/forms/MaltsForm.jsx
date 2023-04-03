import React from "react";
import {IngredientForm} from "./IngredientForm";
import {Box, Button} from "@chakra-ui/react";
import {PlusSquareIcon} from "@chakra-ui/icons";

export const MaltsForm = ({malts, setMalts}) => {
    return (
        <Box>
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
                <Button colorScheme="teal" mt={4} mb={4} onClick={() => setMalts([...malts, { name: '', amount: '' }])}>
                    <PlusSquareIcon mr={2}/>
                    Dodaj słód
                </Button>
            </Box>

    )
}
