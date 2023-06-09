import React from "react";
import {IngredientForm} from "./IngredientForm";
import {Box, Button} from "@chakra-ui/react";
import {PlusSquareIcon} from "@chakra-ui/icons";

export const HopsForm = ({hops, setHops}) => {
    return (
        <Box>
            <IngredientForm
                label="Chmiel"
                ingredients={hops}
                setIngredients={setHops}
                index={0}
            />
            {hops.slice(1).map((_, index) => (
                <IngredientForm
                    key={index + 1}
                    label={`Chmiel ${index + 2}`}
                    ingredients={hops}
                    setIngredients={setHops}
                    index={index + 1}
                />
            ))}
            <Button colorScheme="teal" mt={4} mb={4} onClick={() => setHops([...hops, { name: '', amount: '' }])}>
                <PlusSquareIcon mr={2}/>
                Dodaj chmiel
            </Button>
        </Box>
    )
}