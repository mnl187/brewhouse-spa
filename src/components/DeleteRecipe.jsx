import {Heading, VStack, Text, Button} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

export const DeleteRecipe = (recipe, onDelete) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        onDelete(recipe.id);
        navigate('/')
    }

    return (
        <VStack spacing="8" mx="auto" maxW="600px" my="8">
            <Heading as="h2" size="lg">Usuwanie przepisu</Heading>
            <Text>Czy jesteś pewny, ze chcesz usunąć przepis?</Text>
            <Button onClick={handleDelete} colorScheme="red">Usuń</Button>
            <Button onClick={() => navigate('/')}>Anuluj</Button>
        </VStack>

    );
}