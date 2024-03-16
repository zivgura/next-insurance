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
    font: normal normal normal 18px/25px Arial;
    padding: 10px 18px;
    width: 260px;
    img{
        transform: ${({$reverse}) => $reverse ? 'rotate(180deg)' : 'none'};
    }
`;