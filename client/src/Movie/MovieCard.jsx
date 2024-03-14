import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { MovieModal } from '../MovieModal/MovieModal';
import {
    CardContentContainer,
    CardHeaderContainer,
    MovieCardContainer,
    MovieRatingContainer,
    ReadMoreContainer
} from './MovieCard.style';
import { setTitle } from './utils';
import ArrowIcon from "../assets/arrow.svg";

export function MovieCard({movie}) {
    const [isOpen, setIsOpen] = useState(false);
    const titleRef = useRef();

    useEffect(() => {
        setTitle(titleRef, movie)
    }, [movie]);

    return (
        <MovieCardContainer id={movie?.id}>
            <CardContentContainer>
                <img src={movie?.image} alt={''} width={'260'}/>
                <CardHeaderContainer>
                    <div className='movie-title' ref={titleRef}/>
                </CardHeaderContainer>
            </CardContentContainer>
            <MovieRatingContainer>{`★ ${movie?.rating}`}</MovieRatingContainer>
            <ReadMoreContainer onClick={() => setIsOpen(true)}>
                Read more
                <img src={ArrowIcon} alt={'->'}/>
            </ReadMoreContainer>
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

