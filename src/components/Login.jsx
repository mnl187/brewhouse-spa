import React, {useState} from "react";
import {Box, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";

function Buton(props) {
    return null;
}

Buton.propTypes = {children: PropTypes.node};
export const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");


    return (
        <Box>
            <form action="">
                <FormControl>
                    <FormLabel htmlFor="username">Nazwa użytkownika</FormLabel>
                    <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
                </FormControl>
                <Buton type="submit">Zaloguj</Buton>
                <Buton onClick={() => navigate("/")}>Anuluj</Buton>
            </form>
        </Box>
    )
}