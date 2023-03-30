import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {Header} from "./pages/Header";
import {NotFound} from "./pages/NotFound";
import {AddRecipe} from "./components/AddRecipe";
import {EditRecipeForm} from "./components/forms/EditRecipeForm";
import {DeleteRecipeButton} from "./components/buttons/DeleteRecipeButton";
import {Login} from "./pages/Login";
import {useState} from "react";
import {ViewBeerStyles} from "./components/ViewBeerStyles";
import brewhouseBackground from "./assets/images/brewhouse1.jpg";

const containerStyle = {
    backgroundImage: `linear-gradient(rgba(225, 225, 225, 0.93), rgba(225, 225, 225, 0.95)), url(${brewhouseBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
};

export const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <ChakraProvider>
            <Router>
                <Header/>
                <Box style={containerStyle}>
                    <Routes>
                        <Route path="/" element={loggedIn ? <Home/> : <Login setLoggedIn={setLoggedIn}/>}/>
                        <Route path="/recipe/:id/edit" element={<EditRecipeForm/>}/>
                        <Route path="/recipe/:id/delete" element={<DeleteRecipeButton/>}/>
                        <Route path="/add-recipe" element={<AddRecipe/>}/>
                        <Route path="/view-beer-styles" element={<ViewBeerStyles/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Box>
            </Router>
        </ChakraProvider>
    );
}
