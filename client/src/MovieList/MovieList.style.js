import styled from "styled-components";

export const MovieListContainer = styled.div`
    display: grid;
    grid-template-columns: ${({$colums}) => $colums};
    grid-gap: 0.5% 1%;
    justify-content: center;
`;