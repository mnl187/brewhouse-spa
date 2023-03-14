import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header";
import {Recipe} from "./components/Recipe";
import {NotFound} from "./components/NotFound";
import {RecipeDetails} from "./components/RecipeDetails";
import {AddRecipe} from "./components/AddRecipe";
import {EditRecipeForm} from "./components/EditRecipeForm";

export const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipe" element={<Recipe/>}/>
                    <Route path="/recipe/{id}" element={<RecipeDetails/>}/>
                    <Route path="/recipe/:id/edit" element={<EditRecipeForm />}/>
                    <Route path="/add-recipe" element={<AddRecipe/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
