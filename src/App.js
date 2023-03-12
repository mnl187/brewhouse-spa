import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header";
import {Recipe} from "./components/Recipe";

export const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipe/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
