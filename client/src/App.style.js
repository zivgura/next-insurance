import styled from 'styled-components';

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
    img{
        height: 80px;
    }
    @media screen and (max-width: 800px){
        img {
            height: 50px;
        }
    }
`;
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    font: normal normal bold 80px/66px Arial;
    letter-spacing: 0;
    width: 85%;
    text-transform: uppercase;
    @media screen and (max-width: 800px){
        font: normal normal bold 27px/25px Arial;
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