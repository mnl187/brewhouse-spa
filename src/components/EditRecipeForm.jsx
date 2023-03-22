import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";

export const EditRecipeForm = (recipe, onUpdate) => {
    const [name, setName] = useState(recipe.name);
    const [style, setStyle] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            id: recipe.id,
            name,
            style,
            ingredients,
            instructions,
        });
        navigate(`/recipes/${recipe.id}`);
    };

    useEffect(() => {
        setName(recipe.name);
        setStyle(recipe.style);
        setIngredients(recipe.ingredients);
        setInstructions(recipe.instructions);
    }, [recipe])

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input w="25vw" type="text" id="name" value="name" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="style">Styl</FormLabel>
                    <Input w="25vw" type="text" id="style" value="style" onChange={(e) => setStyle(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="ingredients">Składniki</FormLabel>
                    <Input w="25vw" type="text" id="ingredients" value="ingredients" onChange={(e) => setIngredients(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="instructions">Sposób przygotowania</FormLabel>
                    <Input w="25vw" type="text" id="instructions" value="instructions" onChange={(e) => setInstructions(e.target.value)}/>
                </FormControl>
                <Button type="submit" colorScheme="teal" mr="4">
                    Zapisz
                </Button>
                <Button onClick={() => navigate(-1)}>Anuluj</Button>
            </form>
        </Box>
    )

};
