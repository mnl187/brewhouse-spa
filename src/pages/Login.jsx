import React, {useState} from "react";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Login = ({setLoggedIn}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handeSubmit = (e) => {
        e.preventDefault();

        if (username === 'username' && password === 'password') {
            setLoggedIn(true);
            navigate("/");
        } else {
            setError('Niepoprawny email lub hasło');
        }
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
        setError(null);
    }

    return (
        <Box maxW="600px" mx="auto" py="8">
            <form onSubmit={handeSubmit}>
                <FormControl mb="4">
                    <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                    <Input w="25vw" type="text" id="username" value={username}
                           onChange={(e) => setUsername(e.target.value)} required/>
                </FormControl>
                <FormControl mb="4">
                    <FormLabel htmlFor="password">Hasło</FormLabel>
                    <Input w="25vw" type="text" id="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                </FormControl>

                {error && <Box color="red">{error}</Box>}

                <Button type="submit" colorScheme="teal" mr="4">Zaloguj</Button>
                <Button type="button" onClick={handleCancel}>Anuluj</Button>
            </form>
        </Box>
    );
};