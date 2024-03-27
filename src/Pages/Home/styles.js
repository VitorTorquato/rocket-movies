import styled from "styled-components";


export const Container = styled.div`
        width: 100%;
        height: 100vh;


        display: grid;
        grid-template-rows: 116px auto;

        grid-template-areas: 
        "header"
        "content";

        overflow: hidden;

        > main{
             grid-area:content ;
             padding: 64px 0;
            
             width: 100%;
                max-width: 1137px;
                margin: 4.8px auto;
           
             
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
       
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-top: 32px;
      
        
        max-height: calc(100vh - 297px);
        overflow-y: auto;

        ::-webkit-scrollbar {
        width: 8px;
        }

        ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK_1};
        border-radius: 8px;
        }
        
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