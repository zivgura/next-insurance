import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: start;
    flex-wrap: wrap;
    padding-left: 144px;
    height: 113px;
    background: white;
    position: sticky;
    top: 0;
    z-index: 1301;
`;
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    font: normal normal bold 80px/66px Arial;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({theme})=> theme.backgrounds.main};
`;