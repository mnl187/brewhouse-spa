import {VStack, Button} from "@chakra-ui/react";
import React from "react";

export const DeleteRecipeButton = ({recipe, onDelete}) => {
    const handleDelete = () => {
        onDelete(recipe._id);
    }

    return (
        <VStack spacing="8" mx="auto" maxW="600px" my="8">
            <Button onClick={handleDelete} colorScheme="red">Usuń</Button>
        </VStack>

    );
}