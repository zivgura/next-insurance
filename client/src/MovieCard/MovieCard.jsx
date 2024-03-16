import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { setTitle } from '../appUtils';
import { BadgeButton } from '../BadgeButton/BadgeButton';
import { useHookWithRefCallback } from '../hooks';
import { MovieModal } from '../MovieModal/MovieModal';
import { getRating } from '../movieUtils';
import {
    CardContentContainer,
    CardHeaderContainer,
    MovieCardContainer,
    MovieRatingContainer,
} from './MovieCard.style';

export function MovieCard({movie}) {
    const [isOpen, setIsOpen] = useState(false);
    const action = (htmlElement) => setTitle(htmlElement, movie)
    const [titleRef] = useHookWithRefCallback(action);

    useEffect(() => {

    }, [movie]);

    return (
        <MovieCardContainer id={movie?.id}>
            <CardContentContainer>
                <img src={movie?.image} alt={''} width={'260'}/>
                <CardHeaderContainer>
                    <div className='movie-title' ref={titleRef}/>
                </CardHeaderContainer>
            </CardContentContainer>
            <MovieRatingContainer>{getRating(movie)}</MovieRatingContainer>
            <BadgeButton
                onClick={() => setIsOpen(true)}
                text={'Read more'}
            />
            {isOpen &&
                <MovieModal
                    movie={movie}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            }
        </MovieCardContainer>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        largeimage: PropTypes.string,
        imdbid: PropTypes.string,
        rating: PropTypes.string,
        released: PropTypes.string,
        runtime: PropTypes.string,
        synopsis: PropTypes.string,
        type: PropTypes.string,
        download: PropTypes.string,
        unogsdate: PropTypes.string,
    })
}

