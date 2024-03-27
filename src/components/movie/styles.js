import styled from "styled-components";

export const Container = styled.button`
     
     width: calc(100%  - 8px);
     height: 224px;

     margin-right: 8px;
     


     background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
     border: none;
     border-radius: 16px;

     display: flex;
     flex-direction: column;
     padding: 32px;
     gap: 15px;

     
     
     
     > h1{
          font-size: 24px;
          color: ${({theme}) => theme.COLORS.WHITE};
          
     }
     
     >P{
          font-size: 16px;
          color: ${({theme}) => theme.COLORS.TEXT};
          text-align: justify;

          max-height: 53px;
          line-height: 19px;


          overflow: hidden;
          text-overflow: ellipsis;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

     }

`;