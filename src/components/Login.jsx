import React, {useState} from "react";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Login = (onLogin) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handeSubmit = (e) => {
        e.preventDefault();
        // walidacja do przerobienia jak powstanie backend
        if (email === 'user@site.com' && password === 'password') {
            onLogin(email);
            navigate("/");
        } else {
            setError('Niepoprawny email lub hasło');
        }
    };

    return (
        <Box maxW="600px" mx="auto"  py="8">
            <form onSubmit={handeSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                    <Input w="25vw" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="password">Hasło</FormLabel>
                    <Input w="25vw" type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </FormControl>

                (error && <Box color="red">{error}</Box>)

                <Button type="submit" colorScheme="teal" mr="4">Zaloguj</Button>
                <Button type="button" onClick={}>Anuluj</Button>
            </form>
        </Box>
    )
}