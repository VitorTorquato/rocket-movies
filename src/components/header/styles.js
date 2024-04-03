import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div` 
       grid-area: header;
  
       width: 100%;

       height: 116px;

       border-bottom-width: 1px;
       border-bottom-style: solid;
       border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

       display: flex;
       justify-content: space-between;
       gap: 64px;
       align-items: center;
       padding: 24px 64px;

       > h2{
              font-size: 24px;
              color: ${({theme}) => theme.COLORS.PINK_1};
       }

`;

export const Profile = styled(Link)`

       display: flex;
       align-items: center;
       text-decoration: none ;

       > img{
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        }

       > div{
              display: flex;
              flex-direction: column;
              
              
            

              margin-right:16px;
              line-height: 24px;

              span{
                     font-size: 14px;
                     color:${({theme}) => theme.COLORS.WHITE};

              }
       }

   

`;

export const Logout = styled.button`
       background: none;
       border: none;

       font-size: 14px;
       color: ${({theme}) => theme.COLORS.TEXT};

       text-align: right;

`;

export const Search = styled.div`
       width: 100%;
       flex: 1;


       background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
       color: ${({theme}) => theme.COLORS.TEXT};

       border-radius: 10px;
      
      
       >input{
             

              width: 100%;
              height: 56px;

              padding: 19px 24px;

              color: ${({theme}) => theme.COLORS.WHITE};

              background:transparent;
              border: 0;


              &::placeholder{
              ${({theme}) => theme.COLORS.TEXT};

}



}

       

`;