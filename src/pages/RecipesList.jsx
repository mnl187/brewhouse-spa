import React, {useEffect, useState} from 'react';
import {Box, Grid, GridItem, Heading, Text} from '@chakra-ui/react';
import {SearchBar} from '../components/SearchBar';
import {DeleteRecipeButton} from "../components/buttons/DeleteRecipeButton";
import {EditRecipeButton} from "../components/buttons/EditRecipeButton";

export const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/beers')
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        (recipe.name && recipe.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (recipe.selectedStyle && recipe.selectedStyle.toLowerCase().includes(searchText.toLowerCase()))
    );

    const updateRecipeInDatabase = async (recipeId, updatedRecipe) => {
        try {
            const response = await fetch(
                `http://localhost:5000/beers/${recipeId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedRecipe),
                }
            );
            if (response.status === 200) {
                console.log("Przepis został zaktualizowany");
            } else {
                console.error("Nie udało się zaktualizować przepisu");
            }
        } catch (error) {
            console.error("Wystąpił błąd podczas aktualizacji przepisu:", error);
        }
    };

    const deleteRecipeFromDatabase = async (recipeId) => {
        try {
            await fetch(`http://localhost:5000/beers/${recipeId}`, {
                method: "DELETE",
            });
            setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };

    return (
        <Box>
            <Heading as="h2" size="lg" mb="4">
                Twoje przepisy
            </Heading>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
                {filteredRecipes.map((recipe) => (
                    <GridItem key={recipe._id} borderWidth={1} borderRadius="lg" p={4}>
                        <Heading as="h3" size="md" mb={3}>
                            {recipe.name} - {recipe.selectedStyle}
                        </Heading>
                        <Text fontWeight="bold">Słody:</Text>
                        {recipe.malts.map((malt, index) => (
                            <Text key={index}>
                                {malt.name}: {malt.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Chmiele:</Text>
                        {recipe.hops.map((hop, index) => (
                            <Text key={index}>
                                {hop.name}: {hop.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Drożdże:</Text>
                        {recipe.yeast.map((yeast, index) => (
                            <Text key={index}>
                                {yeast.name}: {yeast.amount} g
                            </Text>
                        ))}
                        <Text fontWeight="bold">Dodatkowe składniki:</Text>
                        {recipe.extras.map((extra, index) => (
                            <Text key={index}>
                                {extra.name}: {extra.amount} g
                            </Text>
                        ))}
                        <EditRecipeButton recipe={recipe} onUpdate={updateRecipeInDatabase} />
                        <DeleteRecipeButton recipe={recipe} onDelete={deleteRecipeFromDatabase}/>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}