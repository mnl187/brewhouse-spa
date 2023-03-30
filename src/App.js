import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./pages/Header";
import {Recipe} from "./pages/Recipe";
import {NotFound} from "./pages/NotFound";
import {RecipeDetails} from "./pages/RecipeDetails";
import {AddRecipe} from "./components/AddRecipe";
import {EditRecipeForm} from "./components/forms/EditRecipeForm";
import {DeleteRecipeButton} from "./components/buttons/DeleteRecipeButton";
import {Login} from "./pages/Login";
import {useState} from "react";
import {ViewBeerStyles} from "./components/ViewBeerStyles";

export const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <ChakraProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={loggedIn ? <Home/> : <Login setLoggedIn={setLoggedIn}/>}/>
                    <Route path="/recipe" element={<Recipe/>}/>
                    <Route path="/recipe/:id" element={<RecipeDetails/>}/>
                    <Route path="/recipe/:id/edit" element={<EditRecipeForm/>}/>
                    <Route path="/recipe/:id/delete" element={<DeleteRecipeButton/>}/>
                    <Route path="/add-recipe" element={<AddRecipe/>}/>
                    <Route path="/view-beer-styles" element={<ViewBeerStyles/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
