import styled from "styled-components";


export const Container = styled.div`
       width:100% ;
   
       
       > header{
           width: 100%;
           height: 144px;
           
           

           background-color: ${({theme})  =>  theme.COLORS.BACKGROUND_900};
         
           display: flex;
           align-items: center;

           padding: 0 124px;
        
           svg {
            color: ${({theme})  =>  theme.COLORS.PINK_1};
            font-size: 24px;
           }
         a{
            display: flex;
            align-items: center;
            gap: 10px;

            text-decoration: none;   
            color: ${({theme})  =>  theme.COLORS.PINK_1};         : ;
         }
        }

`;

export const Form = styled.form`
          width: 340px;
          margin: 0 auto;

          > div:nth-child(4){
        margin-top: 24px;
       }
`;

export const Avatar = styled.div`

        position: relative;
        width: 186px;
        height: 186px;
        margin: -100px auto 32px ;

        > img{
            width: 186px;
            height: 186px;
            border-radius: 50%;

        }


        >label{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.PINK_1};

            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 6px;
            bottom: 6px;

            cursor: pointer;


            input{
                display: none;
            }

            >svg{
                width: 20px;
                height: 20px;
               color: black;

            }
        }

`;