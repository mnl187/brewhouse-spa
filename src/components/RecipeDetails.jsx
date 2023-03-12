import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Container, Heading, Text } from "@chakra-ui/react";

export const RecipeDetails = () => {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async (id) => {
            try {
                const response = await fetch(`/api/recipes/${id}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Wczytywanie...</div>;
    }
return (
    <Container maxW="container.lg">
        {recipe ? (
            <>
                <Heading as="h2" mb="4">
                    {recipe.title}
                </Heading>
                <Text mb="4">{recipe.description}</Text>
                <Text fontWeight="bold" mb="2">
                    Składniki:
                </Text>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <Text fontWeight="bold" mb="2" mt="4">
                    Instrukcja:
                </Text>
                <ol>
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </>
        ) : (
            <Text>Wczytywanie...</Text>
        )}
    </Container>
);
}