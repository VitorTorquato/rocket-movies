import styled from "styled-components";

export const Container = styled.div`
       
       display: flex;
        align-items: center;

        background-color: ${({theme , isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

        color: ${({theme}) => theme.COLORS.GRAY_300};
        
        border: ${({theme , isNew}) => isNew ? `2px dashed ${theme.COLORS.BACKGROUND_700}` : "none"};

        
        border-radius: 10px; 
        padding: 16px;

        
        > button{
                display:grid;
                place-items:center;
                border: none;
                background: none;
                color:${({theme}) => theme.COLORS.PINK_1} ;
                font-size:22px;
        }
        
        
        
        > input {
            width:100%;
            flex-grow:1;
           

            color:${({theme}) => theme.COLORS.WHITE} ;

            background: transparent;
            border: none;


            &::placeholder{
                color:${({theme}) => theme.COLORS.TEXT} ;
            }

        }
        
    
`; 