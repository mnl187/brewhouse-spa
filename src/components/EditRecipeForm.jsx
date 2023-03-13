import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

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
};
