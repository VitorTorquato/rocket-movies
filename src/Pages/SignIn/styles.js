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

    >a{
        display: block;
        margin-top: 124px;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.PINK_1};
        text-decoration: none;

        
    }



    
   >h1{
       
        font-size: 42px;
        color: ${({theme}) => theme.COLORS.PINK_1};

    }

    >h2{
        margin: 48px 0;
        font-size: 24px;
        
    }

    >p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.TEXT};
    }

    >a{
        text-align:center;
        display: block;
        margin: 84px 0 32px 0 ;
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.PINK_1};
        text-decoration: none;

        
    }




`;

export const Background = styled.div`
        flex: 1;
        background: url(${backGroundImg}) no-repeat center center;
        background-size: cover;
        opacity: .1;

`;