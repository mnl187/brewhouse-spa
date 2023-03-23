import React from "react";
import {IngredientForm} from "../pages/IngredientForm";
import {Button, VStack} from "@chakra-ui/react";

export const HopsForm = ({hops, setHops}) => {
    return (
        <VStack>
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
            <Button onClick={() => setHops([...hops, { name: '', amount: '' }])}>
                Dodaj chmiel
            </Button>
        </VStack>
    )
}