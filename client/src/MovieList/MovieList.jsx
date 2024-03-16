import { useContext } from 'react';
import { ScreenContext } from '../App';
import { getColumns } from '../appUtils';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieListContainer } from "./MovieList.style";

export default function MovieList({movies}) {
    const screenWidth = useContext(ScreenContext);

    return (
        <MovieListContainer $screenwidth={screenWidth} $colums={getColumns(screenWidth)}>
            {movies?.map(movie => (
                <MovieCard key={movie?.id} movie={movie}/>
            ))}
        </MovieListContainer>
    )
}