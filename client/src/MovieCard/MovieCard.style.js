import styled from 'styled-components';
import { theme } from '../theme';

export const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    // width: ${({theme}) => (`${theme.photoWidths.large}px`)};
    // @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
    //     width: ${({theme}) => (`${theme.photoWidths.small}px`)};
    // }
`;

export const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;
export const CardHeaderContainer = styled.div`
    display: flex;
    justify-content: start;
    & div {
        text-align: start;
        font: ${({theme}) => `normal normal normal ${theme.fontSizes.secondary.large}px/${theme.rowHeights.secondary.large}px Georgia`};
        letter-spacing: -0.6px;
        max-height: 66px;
        @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
            font: ${({theme}) => `normal normal normal ${theme.fontSizes.secondary.small}px/${theme.rowHeights.secondary.small}px Georgia`};
        }
    }
`;
export const MovieRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: end;
    align-content: start;
    flex-wrap: wrap;
    font: ${({theme}) => `normal normal normal ${theme.fontSizes.secondary.medium}px/${theme.rowHeights.secondary.large}px Arial`};
    letter-spacing: -0.5px;
    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        font: ${({theme}) => `normal normal normal ${theme.fontSizes.secondary.small}px/${theme.rowHeights.secondary.medium}px Arial`};
    }
`;
