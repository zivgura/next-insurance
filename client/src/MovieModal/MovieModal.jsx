import { Modal } from '@mui/material';
import { useContext } from 'react';
import { ScreenContext } from '../App';
import { setDescription, setTitle } from '../appUtils';
import { BadgeButton } from '../BadgeButton/BadgeButton';
import { useHookWithRefCallback } from '../hooks';
import { getDuration, getRating } from '../movieUtils';

import {
    ContentSection,
    ModalBody,
    PhotoSection,
    SubTitleContainer,
    TitleContainer,
    MovieRatingContainer, MovieDescriptionContainer, ContentContainer, ActionSection
} from './MovieModal.style';

export function MovieModal({movie, open, onClose}) {
    const titleAction = (ref) => setTitle(ref, movie, false)
    const descriptionAction = (ref) => setDescription(ref, movie)
    const [titleRef] = useHookWithRefCallback(titleAction);
    const [descriptionRef] = useHookWithRefCallback(descriptionAction);
    const screenWidth = useContext(ScreenContext);

    return (
        <Modal open={open} onClose={onClose}>
            <ModalBody $direction={screenWidth < 800}>
                <PhotoSection>
                    <img src={movie?.largeimage} alt={''}/>
                </PhotoSection>
                <ContentContainer>
                    <ContentSection>
                        <TitleContainer>
                            <div ref={titleRef}/>
                        </TitleContainer>
                        <SubTitleContainer>
                            {getDuration(movie)}
                        </SubTitleContainer>
                        <MovieRatingContainer>
                            {`${getRating(movie)}/10`}
                        </MovieRatingContainer>
                        <MovieDescriptionContainer>
                            <div ref={descriptionRef}/>
                        </MovieDescriptionContainer>
                    </ContentSection>
                    <ActionSection>
                        <BadgeButton
                            onClick={onClose}
                            text={'Back to list'}
                            reverse={true}
                        />
                    </ActionSection>
                </ContentContainer>
            </ModalBody>
        </Modal>
    )
}