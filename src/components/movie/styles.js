import styled from "styled-components";

export const Container = styled.button`
     
     width: 100%;
     height: 224px;


     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     border: none;
     border-radius: 16px;

     display: flex;
     flex-direction: column;

     

`;