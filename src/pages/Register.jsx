import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {VStack, Haeding, FormControl, Input, FormLabel, Box, Heading} from "@chakra-ui/react";

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

        if (response.ok) {
            setError("Rejestracja zakończona pomyślnie, zaloguj się.");
            navigate("/login");
        } else {
            setError(data.message);
        }
    };


    return (
        <VStack>
            <Heading>Rejestracja w Brewhouse, aplikacji piwowarskiej.</Heading>
            <Box maxW="600px" mx="auto" py="8">
                <form onSubmit={handleSubmit}>
                    <FormControl mb="4">
                        <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                        <Input
                            w="25vw"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel htmlFor="password">Hasło</FormLabel>
                        <Input
                            w="25vw"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && <Box color="red">{error}</Box>}

                    </FormControl>
                </form>
            </Box>
        </VStack>
    )
}