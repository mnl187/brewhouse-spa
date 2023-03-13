import React, {useState} from 'react';
import {Box, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";

export const RecipeForm = ({ onSubmit }) => {

    const [name, setName] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name})
    }

    return (
        <Box>
            <Heading>
                Dodaj nowy przepis
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel htmlFor="name">Nazwa</FormLabel>
                    <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </FormControl>
            </form>

        </Box>

    )

}