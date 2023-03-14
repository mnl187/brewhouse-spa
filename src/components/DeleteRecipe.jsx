import {Heading, VStack, Text, Button} from "@chakra-ui/react";
import React from "react";


export const DeleteRecipe = () => {

    const handleDelete = () => {

    }

    return (
        <VStack>
            <Heading>Usuwanie przepisu</Heading>
            <Text>Czy jesteś pewny, ze chcesz usunąć przepis?</Text>
            <Button onClick={handleDelete}></Button>
        </VStack>

    );
}