import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {MaltsForm} from './MaltsForm';
import {HopsForm} from './HopsForm';
import {YeastForm} from './YeastForm';
import {ExtrasForm} from './ExtrasForm';
import {BeerStyleDetails} from '../../pages/BeerStyleDetails';
import {CheckIcon} from "@chakra-ui/icons";

export const RecipeForm = ({onSubmit}) => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [instructions, setInstructions] = useState();
    const [beerStyles, setBeerStyles] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [malts, setMalts] = useState([{name: '', amount: ''}]);
    const [hops, setHops] = useState([{name: '', amount: ''}]);
    const [yeast, setYeast] = useState([{name: '', amount: ''}]);
    const [extras, setExtras] = useState([{name: '', amount: ''}]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name,
            selectedStyle,
            malts,
            hops,
            yeast,
            extras,
            instructions
        });
        navigate('/');
    }
    useEffect(() => {
        fetch('http://localhost:5000/beer-styles')
            .then((response) => response.json())
            .then((data) => setBeerStyles(data));
    }, []);

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem colSpan={1} mx="auto" pt="8" colEnd="auto"justifySelf="end">
                <BeerStyleDetails beerStyles={beerStyles} selectedStyle={selectedStyle}/>
            </GridItem>
            <GridItem colSpan={2} mx="auto" pt="8">
                <Heading as="h2" size="lg" mb="4">
                    Dodaj nowy przepis
                </Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl mb="4" id="beerStyle" isRequired>
                        <FormLabel>Styl piwa</FormLabel>
                        <Select
                            variant="filled"
                            colorScheme="teal"
                            w="25vw"
                            placeholder="Wybierz styl piwa"
                            value={selectedStyle}
                            onChange={(e) => setSelectedStyle(e.target.value)}
                            bg="gray.700"
                            color="white"
                            _focus={{ borderColor: "teal.500" }}
                        >
                            {beerStyles.map((style) => (
                                <Box as="option"
                                     key={style.name}
                                     value={style.name}
                                     bg="gray.800">
                                    {style.name}
                                </Box>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl mb="4" pt="4" isRequired>
                        <FormLabel htmlFor="name">Nazwa</FormLabel>
                        <Input w="25vw" type="text" id="name" onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel>Składniki</FormLabel>
                        <MaltsForm malts={malts} setMalts={setMalts}/>
                        <HopsForm hops={hops} setHops={setHops}/>
                        <YeastForm yeast={yeast} setYeast={setYeast}/>
                        <ExtrasForm extras={extras} setExtras={setExtras}/>
                    </FormControl>
                    <FormControl mb="4">
                        <FormLabel htmlFor="instructions">Sposób przygotowania</FormLabel>
                        <Input w="25vw" type="text" id="instructions"
                               onChange={(e) => setInstructions(e.target.value)}/>
                    </FormControl>
                    <Button
                        type="submit"
                        colorScheme="teal"
                        mt="8">
                        <CheckIcon mr={2}/>
                        Zapisz przepis
                    </Button>
                </form>
            </GridItem>
        </Grid>
    )
}