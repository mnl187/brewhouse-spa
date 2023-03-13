import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";

export const RecipeForm = ({ onSubmit }) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [directions, setDirections] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, description, ingredients, directions})
    }

    return (
        <Box axW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Dodaj nowy przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input w="25vw" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="description">Opis</FormLabel>
                    <Input w="25vw" type="text" id="description" value={name} onChange={(e) => setDescription(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="ingredients">Składniki</FormLabel>
                    <Input w="25vw" type="text" id="ingredients" value={name} onChange={(e) => setIngredients(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="directions">Instrukcje</FormLabel>
                    <Input w="25vw" type="text" id="directions" value={name} onChange={(e) => setDirections(e.target.value)}/>
                </FormControl>

            </form>

        </Box>

    )

}