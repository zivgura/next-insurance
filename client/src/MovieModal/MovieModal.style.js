import styled from 'styled-components';
import { theme } from '../theme';

export const ModalBody = styled.div`
    background: ${({theme}) => theme.backgrounds.secondary};
    display: flex;
    flex-direction: ${({$direction}) => $direction ? 'column' : 'row'};
    gap: 8%;
    width: 80%;
    height: 60%;
    position: absolute;
    top: 20%;
    left: 10%;
    padding: 2% 5%;
    box-sizing: border-box;
    overflow: scroll;
    &:focus-visible {
        outline: none;
    }
    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        top: 10%;
    }
`;

export const PhotoSection = styled.section`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
export const ContentSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
export const ActionSection = styled.section`
    display: flex;
`;

export const TitleContainer = styled.div`
    display: flex;
    font: normal normal bold 45px/31px Arial;
    letter-spacing: 0;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    font: normal normal normal 25px/31px Arial;
    letter-spacing: -0.5px;
`;

export const MovieRatingContainer = styled.div`
    display: flex;
    font: normal normal normal 25px/21px Arial;
    letter-spacing: 0;
`;

export const MovieDescriptionContainer = styled.div`
    display: flex;
    font: normal normal normal 30px/31px Georgia;
    letter-spacing: -0.6px;
`;