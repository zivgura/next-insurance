import { theme } from '../theme';
import styled from 'styled-components';
export const BadgeButtonContainer = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: ${({$reverse}) => $reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    border: 1px solid black;
    border-radius: 100px;
    height: 42px;
    box-sizing: border-box;
    padding: 10px 18px;
    font: ${({theme}) => `normal normal normal ${theme.rowHeights.secondary.xs}px/${theme.rowHeights.secondary.medium}px Arial`};
    width: ${({theme}) => (`${theme.photoWidths.large}px`)};
    img{
        transform: ${({$reverse}) => $reverse ? 'rotate(180deg)' : 'none'};
    }
    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        width: ${({theme}) => (`${theme.photoWidths.small}px`)};
        font: ${({theme}) => `normal normal normal ${theme.fontSizes.secondary.xs}px/${theme.rowHeights.secondary.xs}px Arial`};
    }
`;