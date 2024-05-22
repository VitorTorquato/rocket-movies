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
    
    .tags{
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        gap: 10px;
        width: 100%;
        padding: 16px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border-radius: 8px;
        
        
        
    }

    `;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 32px;


    >header{
       >h1{
        margin-top: 1.6rem;
       }
    }

        >div{
            display: flex;
            gap: 40px;
        }    
        
        >.buttons{
            width: 50%;
            

          
        }
       
      
   
    
`;

