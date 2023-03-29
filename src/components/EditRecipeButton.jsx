import {VStack, Button} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

export const EditRecipeButton = ({recipe, onUpdate}) => {
    const handleUpdate = () => {
        onUpdate(recipe._id);
    }

    return (
        <VStack spacing="8" mx="auto" maxW="600px" my="8">
            <Button onClick={handleUpdate} as={Link} to={`/recipes/${recipe._id}/edit`} colorScheme="blue" mr="4">Edytuj</Button>
        </VStack>

    );
}