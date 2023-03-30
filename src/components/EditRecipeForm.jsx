import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const EditRecipeForm = ({ onUpdate }) => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`http://localhost:5000/beers/${id}`);
            const data = await response.json();
            setRecipe(data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(id, {
            name: recipe.name,
            selectedStyle: recipe.selectedStyle,
            malts: recipe.malts,
            hops: recipe.hops,
            yeast: recipe.yeast,
            extras: recipe.extras,
        });
        navigate(-1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="selectedStyle"
                        name="selectedStyle"
                        value={recipe.selectedStyle}
                        isReadOnly
                        bg="gray.100"
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="name"
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Słód</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="malts"
                        name="malts"
                        value={recipe.malts}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Chmiel</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="hops"
                        name="hops"
                        value={recipe.hops}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Drożdże</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="yeast"
                        name="yeast"
                        value={recipe.yeast}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="name">Dodatki</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="yeast"
                        name="v"
                        value={recipe.yeast}
                        onChange={handleChange}
                    />
                </FormControl>

                <Button type="submit" colorScheme="teal" mr="4">
                    Zapisz
                </Button>
                <Button onClick={() => navigate(-1)}>Anuluj</Button>
            </form>
        </Box>
    );
}