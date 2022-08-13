import styled from "styled-components";

export const Btn = styled.button`
    padding: ${p => p.theme.space[4]}px;
    text-transform: uppercase;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.dimGray};
    background-color: ${p => p.theme.colors.dimGray};
    font-weight: ${p => p.theme.fontWeights.bold};
    :not(:last-child) {
        margin-right: ${p => p.theme.space[4]}px;
    }
`;  
