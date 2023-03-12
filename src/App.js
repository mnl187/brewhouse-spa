import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header";
import {Recipe} from "./components/Recipe";
import {NotFound} from "./components/NotFound";
import {RecipeDetails} from "./components/RecipeDetails";

export const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipe" element={<Recipe/>}/>
                    <Route path="/recipe/{id}" element={<RecipeDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
