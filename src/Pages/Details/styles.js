import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    display: grid;
    grid-template-rows: 116px auto;

    grid-template-areas: 
    "header"
    "content";




`;
