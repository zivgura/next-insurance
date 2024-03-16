import styled from 'styled-components';
import { theme } from '../theme';

export const HeaderContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: start;
    flex-wrap: wrap;
    padding: 1% 10%;
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
