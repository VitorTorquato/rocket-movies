import styled from "styled-components";


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
       padding: 24px 123px;

       > h2{
              font-size: 24px;
              color: ${({theme}) => theme.COLORS.PINK_1};
       }

`;

export const Profile = styled.div`

       display: flex;
       align-items: center;
       

       > img{
            width: 56px;
            height: 56px;
            border-radius: 50%;
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