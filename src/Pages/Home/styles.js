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
             padding: 64px 0;
             overflow-y:auto ;
             overflow-y: hidden;
             
             header{
                     display: flex;
                align-items: center;
                justify-content: space-between;
                
                max-width: 1170px;
                margin: 0 auto;

                

             }
             
        }
        


        `;


export const Content = styled.div`
        max-width: 1170px;
        display: flex;
        flex-direction: column;
        margin: 64px auto;
        
        overflow-y:auto ;
        gap:24px ;
        
`;


export const AddMovie = styled.button`
          
         height:48px ;

         display: flex;
         align-items: center;
         gap: 8px;

         font-size: 16px;

         background-color: ${({theme}) => theme.COLORS.PINK_1};
         color: ${({theme}) => theme.COLORS.BACKGROUN_700};

         border: none;
         border-radius: 8px;

         padding: 32px;

`;