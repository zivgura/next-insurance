import styled from 'styled-components';
import { theme } from '../theme';

export const FooterContainer = styled.div`
    background: ${({theme}) => theme.backgrounds.footer};

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 300px;
    position: sticky;
    bottom: 0;
    z-index: 1301;

    img {
        height: 40px;
    }

    @media screen and (max-width: ${theme.gridBreakpoints.md}px) {
        height: 200px;
        img {
            height: 30px;
        }
    }
`;

export const ContactUsContainer = styled.div`
    font: normal normal normal 33px/37px Georgia;
    color: ${({theme}) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 20px
`;

export const DetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    font: normal normal normal 16px/21px Georgia;
`;

export const ShareIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 16%;
    flex-wrap: wrap;
`;