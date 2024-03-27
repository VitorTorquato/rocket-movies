import styled from "styled-components";

export const Container = styled.span`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 12px;


    padding: 5px 16px;
    border-radius: 8px;
`;