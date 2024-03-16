import styled from 'styled-components';
import { theme } from './theme';

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    font: ${({theme}) => `normal normal bold ${theme.fontSizes.title.large}px/${theme.rowHeights.title.large}px Arial`};
    letter-spacing: 0;
    width: 85%;
    text-transform: uppercase;
    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        font: ${({theme}) => `normal normal bold ${theme.fontSizes.title.small}px/${theme.rowHeights.title.small}px Arial`};
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme})=> theme.backgrounds.main};
    max-width: 100vw;
    padding: 5% 10%;
    gap: 30px;
`;