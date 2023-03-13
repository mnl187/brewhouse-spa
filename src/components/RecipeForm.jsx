import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const RecipeForm = ({ onSubmit }) => {

    const navigate = useNavigate ();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [directions, setDirections] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, description, ingredients, directions});
        navigate('/');
    }

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Dodaj nowy przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input w="25vw" type="text" id="name" value="name" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="description">Opis</FormLabel>
                    <Input w="25vw" type="text" id="description" value="description" onChange={(e) => setDescription(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="ingredients">Składniki</FormLabel>
                    <Input w="25vw" type="text" id="ingredients" value="ingredients" onChange={(e) => setIngredients(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="directions">Instrukcje</FormLabel>
                    <Input w="25vw" type="text" id="directions" value="directions" onChange={(e) => setDirections(e.target.value)}/>
                </FormControl>
                <Button type="submit" colorScheme="teal" mt="4">
                    Dodaj przepis
                </Button>
            </form>

        </Box>

    )

}