import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    
    grid-template-areas: 
    "header"
    "content";
         
    > main{
        grid-area:content ;
         padding: 0;

         overflow-y:auto;
            
        width: 100%;
        max-width: 1200px;
        margin: 10px auto;
        
    }
`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 32px;


    >header{
          a{
        display: flex;
        align-items: center;
        margin: 32px auto;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.PINK_1};
        text-decoration: none;
        }
    }
        
        >div{
            display: flex;
            gap: 10px;
        }
        
        
`;

export const Section = styled.section`
    
    
   

`;
