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
        <VStack>
            <Heading>Usuwanie przepisu</Heading>
            <Text>Czy jesteś pewny, ze chcesz usunąć przepis?</Text>
            <Button onClick={handleDelete}>Usuń</Button>
            <Button onClick={() => navigate('/')}>Anuluj</Button>
        </VStack>

    );
}