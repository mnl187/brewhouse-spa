import React, {useState} from "react";
import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");


    return (
        <Box>
            <form action="">
                <FormControl>
                    <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                    <Input type="text" id="username" value={username}></Input>
                </FormControl>
            </form>
        </Box>
    )
}