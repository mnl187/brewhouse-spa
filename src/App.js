import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Box, ChakraProvider} from "@chakra-ui/react";
import {Header} from "./pages/Header";
import {NotFound} from "./pages/NotFound";
import {AddRecipe} from "./api/AddRecipe";
import {EditRecipeForm} from "./components/forms/EditRecipeForm";
import {DeleteRecipeButton} from "./components/buttons/DeleteRecipeButton";
import {Login} from "./pages/Login";
import React, {useState} from "react";
import {ViewBeerStyles} from "./pages/ViewBeerStyles";
import brewhouseBackground from "./assets/images/brewhouse1.jpg";
import {BeerStyleDetailsPage} from "./pages/BeerStyleDetailsPage";
import {Register} from "./pages/Register";
import {Auth} from "./components/buttons/Auth";
import {AuthWrapper} from './components/AuthWrapper';

const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85)), url(${brewhouseBackground})`,
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
                <Box sx={{...containerStyle, color: "white"}}>
                    <Routes>
                        <Route path="/auth" element={<Auth/>}>
                            <Route index element={<Login setLoggedIn={setLoggedIn}/>} path="login"/>
                            <Route element={<Register/>} path="register"/>
                        </Route>
                        <Route path="/" element={<AuthWrapper loggedIn={loggedIn}/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/recipe/:id/edit" element={<EditRecipeForm/>}/>
                            <Route path="/recipe/:id/delete" element={<DeleteRecipeButton/>}/>
                            <Route path="/add-recipe" element={<AddRecipe/>}/>
                            <Route path="/view-beer-styles" element={<ViewBeerStyles/>}/>
                            <Route path="/beer-styles/:id" element={<BeerStyleDetailsPage/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </Box>
            </Router>
        </ChakraProvider>
    );
}
