import React, {useState} from "react";

export const EditRecipeForm = (recipe, onUpdate) => {
    const [name, setName] = useState(recipe.name);
    const [description, setDescription] = useState(recipe.description);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [directions, setDirections] = useState(recipe.directions);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            id: recipe.id,
            name,
            description,
            ingredients,
            directions,
        })
    }
}
