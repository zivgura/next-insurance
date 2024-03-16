import styled from 'styled-components';

export const MovieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 260px;
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
        font: normal normal normal 30px/31px Georgia;
        letter-spacing: -0.6px;
        max-height: 66px;
    }
`;
export const MovieRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: end;
    align-content: start;
    flex-wrap: wrap;
    font: normal normal normal 25px/31px Arial;
    letter-spacing: -0.5px;
`;

export const ReadMoreContainer = styled.div`
    
`;