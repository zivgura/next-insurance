import styled from 'styled-components';
import { theme } from './theme';

export const HeaderContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: start;
    flex-wrap: wrap;
    padding-left: 10%;
    height: 113px;
    background: white;
    position: sticky;
    top: 0;
    z-index: 1301;

    img {
        height: 80px;
    }

    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        img {
            height: 50px;
        }
    }
`;
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
    overflow: hidden;
    padding: 5% 10%;
    gap: 30px;
`;