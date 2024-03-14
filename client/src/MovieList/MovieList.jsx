import { useEffect, useState } from 'react';
import { getAllMovies } from '../DAL/utils';
import { MovieCard } from '../Movie/MovieCard';
import { MovieListContainer } from "./MovieList.style";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            return await getAllMovies();
        }

        getMovies()
            .then(data => setMovies(data))
    }, []);

    return (
        <MovieListContainer>
            {movies?.map(movie => (
                <MovieCard key={movie?.id} movie={movie}/>
            ))}
        </MovieListContainer>
    )
}