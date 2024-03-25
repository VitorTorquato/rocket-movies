import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    
    grid-template-areas: 
    "header"
    "content";
         
    > main{
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;
    }
    
    `;

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        gap: 40px;
        
        > div{
            display: flex;
            flex-direction: column;

            gap: 22px;

            > button:first-child{
                display: flex;
                align-items: center;
                gap: 10px;
                text-align: left;
            }

            > h1{
                font-size: 36p;


            };

            > span{
                font-size: 16px;
                display:flex;
                align-items: center;
                gap: 12px;


                >img{
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
                }

                > svg{
                    font-size: 16px;
                    color: ${({theme}) => theme.COLORS.PINK_1};
                }
            };
        }

        
        max-width: 1137px;
        margin:  0 auto;

        display: flex;
        flex-direction: column;


        > p{
            font-size: 16px;
            text-align: justify;
        }



`;