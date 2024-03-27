import styled from "styled-components";


export const Container = styled.div`
       width:100% ;
       height: 144px;
       background-color:${({theme}) => theme.COLORS.BACKGROUND_900} ;
       padding :32px ;
       
       display: flex;
       align-items: center;
       > header{
           
           button:first-child{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-align: left;
                    color:${({theme}) => theme.COLORS.PINK_1} ;
                }
        }

`;