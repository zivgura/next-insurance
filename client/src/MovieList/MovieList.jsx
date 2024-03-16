import { useContext, useEffect, useState } from 'react';
import { ScreenContext } from '../App';
import { getAllMovies } from '../DAL/utils';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieListContainer } from "./MovieList.style";

export default function MovieList({movies}) {
    const screenWidth = useContext(ScreenContext);

    return (
        <MovieListContainer $screenwidth={screenWidth}>
            {movies?.map(movie => (
                <MovieCard key={movie?.id} movie={movie}/>
            ))}
        </MovieListContainer>
    )
}