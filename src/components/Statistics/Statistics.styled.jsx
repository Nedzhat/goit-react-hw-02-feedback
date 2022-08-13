import styled from "styled-components";

export const TitleStat = styled.h2`
    text-transform: uppercase;
`;

export const DescStat = styled.p`
    padding: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold}; 
`;