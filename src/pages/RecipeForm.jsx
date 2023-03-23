import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, FormLabel, Heading, Input, Select} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const RecipeForm = ({ onSubmit }) => {

    const navigate = useNavigate ();
    const [name, setName] = useState();
    // const [style, setStyle] = useState();
    const [ingredients, setIngredients] = useState();
    const [instructions, setInstructions] = useState();
    const [beerStyles, setBeerStyles] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, selectedStyle, ingredients, instructions});
        navigate('/');
    }
    useEffect(() => {
        fetch('http://localhost:5000/beer-styles')
            .then((response) => response.json())
            .then((data) => setBeerStyles(data));
    }, []);

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Dodaj nowy przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4" id="beerStyle" isRequired>
                    <FormLabel>Styl piwny</FormLabel>
                    <Select
                        placeholder="Wybierz styl piwny"
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                    >
                        {beerStyles.map((style) => (
                            <option key={style.name} value={style.name}>
                                {style.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input w="25vw" type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                {/*<FormControl mb="4">*/}
                {/*    <FormLabel htmlFor="style">Styl</FormLabel>*/}
                {/*    <Input w="25vw" type="text" id="style" onChange={(e) => setStyle(e.target.value)}/>*/}
                {/*</FormControl>*/}
                <FormControl mb="4">
                    <FormLabel htmlFor="ingredients">Składniki</FormLabel>
                    <Input w="25vw" type="text" id="ingredients" onChange={(e) => setIngredients(e.target.value)}/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="instructions">Sposób przygotowania</FormLabel>
                    <Input w="25vw" type="text" id="instructions" onChange={(e) => setInstructions(e.target.value)}/>
                </FormControl>
                <Button type="submit" colorScheme="teal" mt="4">
                    Dodaj przepis
                </Button>
            </form>
        </Box>
    )
}