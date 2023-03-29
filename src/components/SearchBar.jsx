import React from 'react';
import { Input } from '@chakra-ui/react';

export const SearchBar = ({ searchText, setSearchText }) => {
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <Input
            placeholder="Wyszukaj piwo po nazwie lub stylu"
            value={searchText}
            onChange={handleSearchInputChange}
            mb={6}
        />
    );
};