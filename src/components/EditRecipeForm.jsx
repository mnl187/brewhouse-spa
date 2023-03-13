import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";

export const EditRecipeForm = (recipe, onUpdate) => {
    const [name, setName] = useState(recipe.name);
    const [description, setDescription] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [directions, setDirections] = useState(recipe.directions);

    const navigate = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            id: recipe.id,
            name,
            description,
            ingredients,
            directions,
        });
        navigate(`/recipes/${recipe.id}`);
    };

    useEffect(() => {
        setName(recipe.name);
        setDirections(recipe.description);
        setIngredients(recipe.ingredients);
        setDirections(recipe.directions);
    }, [recipe])

    return (
        <Box>
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
            </form>
        </Box>
    )

};
