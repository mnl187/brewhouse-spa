import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, FormControl, FormLabel, Input, Heading, Flex, Spacer} from "@chakra-ui/react";
import {IngredientInputs} from "./IngredientInputs";
import {CheckIcon, NotAllowedIcon} from "@chakra-ui/icons";


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

    const handleIngredientChange = (index, key, field, value) => {
        setRecipe((prevState) => {
            const ingredients = prevState[key].slice();
            ingredients[index] = {...ingredients[index], [field]: value};
            return {...prevState, [key]: ingredients};
        });
    };

    const renderIngredients = (key) => {
        return recipe[key].map((ingredient, index) => (
            <IngredientInputs
                key={ingredient._id}
                ingredient={ingredient}
                index={index}
                keyName={key}
                onIngredientChange={handleIngredientChange}
            />
        ));
    };

    return (
        <Box maxW="480px" mx="auto" pt="8">
            <Heading as="h2" size="lg" mb="4">
                Edytuj przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="selectedStyle">Styl piwa</FormLabel>
                    <Input
                        variant="filled"
                        sx={{
                            _hover: {
                                backgroundColor: "gray.700",
                            },
                        }}
                        w="25vw"
                        type="text"
                        id="selectedStyle"
                        name="selectedStyle"
                        value={recipe.selectedStyle}
                        isReadOnly
                        bg="gray.800"
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
                <FormLabel>Składniki</FormLabel>
                <FormControl mb="4">
                    <Flex>
                        <FormLabel htmlFor="malts">Słód</FormLabel>
                        <Spacer/>
                        <FormLabel fontSize="sm" fontWeight="bold">Ilość [g]</FormLabel>
                    </Flex>
                    {renderIngredients("malts")}
                </FormControl>
                <FormControl mb="4">
                    <Flex>
                        <FormLabel htmlFor="hops">Chmiel</FormLabel>
                        <Spacer/>
                        <FormLabel fontSize="sm" fontWeight="bold">Ilość [g]</FormLabel>
                    </Flex>
                    {renderIngredients("hops")}
                </FormControl>
                <FormControl mb="4">
                    <Flex>
                        <FormLabel htmlFor="yeast">Drożdże</FormLabel>
                        <Spacer/>
                        <FormLabel fontSize="sm" fontWeight="bold">Ilość [g]</FormLabel>
                    </Flex>
                    {renderIngredients("yeast")}
                </FormControl>
                <FormControl mb="4">
                    <Flex>
                        <FormLabel htmlFor="extras">Dodatki</FormLabel>
                        <Spacer/>
                        <FormLabel fontSize="sm" fontWeight="bold">Ilość [g]</FormLabel>
                    </Flex>
                    {renderIngredients("extras")}
                </FormControl>
                <Button
                    type="submit"
                    colorScheme="teal"
                    mr="4">
                    <CheckIcon mr={2}/>
                    Zapisz
                </Button>
                <Button
                    colorScheme="red"
                    onClick={() => navigate(-1)}>
                    <NotAllowedIcon mr={2}/>
                    Anuluj
                </Button>
            </form>
        </Box>
    )
        ;
}