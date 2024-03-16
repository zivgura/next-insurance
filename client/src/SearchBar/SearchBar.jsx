import { Autocomplete, TextField } from '@mui/material';
import { getAllMovies } from '../DAL/utils';
import { getMovies } from '../movieUtils';
import { SearchBarContainer } from "./SearchBar.style";

export function SearchBar({movies, setMovies}) {
    return (
        <SearchBarContainer>
            <Autocomplete
                freeSolo
                id="search-bar"
                disableClearable
                options={movies?.map((movie) => movie.title)}
                onChange={(e, newValue) => {
                    setMovies(movies.filter(movie => movie.title === newValue))
                }}
                handleHomeEndKeys={true}
                onInputChange={(e, newValue, reason) => {
                    if (reason === 'input' && newValue === '') {
                        getMovies()
                            .then(data => {
                                setMovies(data)
                            })
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search a movie"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </SearchBarContainer>
    )
}
