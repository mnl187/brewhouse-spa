import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {VStack, FormControl, Input, FormLabel, Box, Heading, Button} from "@chakra-ui/react";

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/auth/register", {
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

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setError(null);
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
                    </FormControl>

                    {error && <Box color="red">{error}</Box>}

                    <Button type="submit" colorScheme="teal" mr="4">
                        Zarejestruj
                    </Button>
                    <Button type="button" colorScheme="blue" onClick={handleCancel}>
                        Anuluj
                    </Button>
                </form>
            </Box>
        </VStack>
    )
}