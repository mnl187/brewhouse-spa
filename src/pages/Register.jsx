import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {VStack, Haeding, FormControl, Input, FormLabel, Box} from "@chakra-ui/react";

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        });
        const data = await response.json();

    };

    return (
        <VStack>
            <Haeding>Rejestracja w Brewhouse, aplikacji piwowarskiej.</Haeding>
            <Box maxW="600px" mx="auto" py="8">
                <form onSubmit={handleSubmit}>
                    <FormControl mb="4">
                        <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                        <Input/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel htmlFor="password">Hasło</FormLabel>
                        <Input/>
                    </FormControl>
                </form>
            </Box>
        </VStack>
    )
}