import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const RecipeDetails = () => {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
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

}