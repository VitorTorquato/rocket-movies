import { createGlobalStyle } from "styled-components";
import theme from './theme'


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        background-color: ${theme.COLORS.BACKGROUND_800};
        color: ${theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body , input , button , textarea{
        font-family: "Roboto", serif;
        font-size: 16px;
        outline: none;

    }

    button , a{
        cursor: pointer;    
        transition: filter 0.2s ;

    }

    button:hover , a:hover{
        filter: brightness(0.9);
    }

`;