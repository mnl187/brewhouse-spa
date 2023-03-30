import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, FormControl, FormLabel, Input, Heading} from "@chakra-ui/react";

export const EditRecipeForm = ({onUpdate}) => {
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();
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
        return <p>Wczytywanie...</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/beers/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },


            body: JSON.stringify({
                name: recipe.name,
                selectedStyle: recipe.selectedStyle,
                malts: recipe.malts,
                hops: recipe.hops,
                yeast: recipe.yeast,
                extras: recipe.extras,
            }),
        });

        if (response.ok) {
            onUpdate(id, {
                name: recipe.name,
                selectedStyle: recipe.selectedStyle,
                malts: recipe.malts,
                hops: recipe.hops,
                yeast: recipe.yeast,
                extras: recipe.extras,
            });
            navigate(-1);
        } else {
            console.error("Error updating the recipe");
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRecipe((prevState) => ({...prevState, [name]: value}));
    };

    return (
        <Box maxW="600px" mx="auto" mt="8">
            <Heading as="h2" size="lg" mb="4">
                Edytuj przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="selectedStyle">Styl piwny</FormLabel>
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
                    <FormLabel htmlFor="malts">Słód</FormLabel>
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
                    <FormLabel htmlFor="hops">Chmiel</FormLabel>
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
                    <FormLabel htmlFor="yeast">Drożdże</FormLabel>
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
                    <FormLabel htmlFor="extras">Dodatki</FormLabel>
                    <Input
                        w="25vw"
                        type="text"
                        id="extras"
                        name="extras"
                        value={recipe.extras}
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