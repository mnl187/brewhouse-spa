import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <VStack>
            <Box>
                <Button onClick={() => handleClick("/auth/login")} colorScheme="blue" mr="4">
                    Logowanie
                </Button>
                <Button onClick={() => handleClick("/auth/register")} colorScheme="teal">
                    Rejestracja
                </Button>
            </Box>
            <Outlet />
        </VStack>
    );
};