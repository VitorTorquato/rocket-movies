import styled from "styled-components";
import backGroundImg from '../../assets/background.png'


export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export  const Form = styled.form`
    
    padding: 0 136px;
    
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    
    >h2{
        margin: 48px 0;
        font-size: 24px;
        
    }
    

    >p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.TEXT};
    }

  



    
   >h1{
       
        font-size: 42px;
        color: ${({theme}) => theme.COLORS.PINK_1};

    }

    
    > a{
        display: flex;
        align-items: center;
        margin: 32px auto ;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.PINK_1};
        text-decoration: none;
    }

   



`;

export const Background = styled.div`
        flex: 1;
        background: url(${backGroundImg}) no-repeat center center;
        background-size: cover;
        opacity: .3;

`;