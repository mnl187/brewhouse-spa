import {VStack, Button} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import {EditIcon} from "@chakra-ui/icons";

export const EditRecipeButton = ({recipe}) => {


    return (
        <VStack spacing="8" mx="auto" maxW="600px" my="8">
            <Button as={Link} to={`/recipe/${recipe._id}/edit`} colorScheme="teal" mr="4">
                <EditIcon mr={2}/>
                Edytuj
            </Button>
        </VStack>

    );
}