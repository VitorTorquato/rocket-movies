import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1;


    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;


    > input{

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
    
    > svg{
        margin-left: 16px;
    }
`;