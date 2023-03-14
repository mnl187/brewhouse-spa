import React, {useState} from "react";
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");

    const handeSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <Box>
            <form onSubmit={handeSubmit}>
                <FormControl>
                    <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                    <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                </FormControl>
                <Button type="submit">Zaloguj</Button>
                <Button onClick={() => navigate("/")}>Anuluj</Button>
            </form>
        </Box>
    )
}