import { useState , useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

import { Container , Content } from "./styles"

import { FiArrowLeft ,  FiClock  } from "react-icons/fi";


import { useAuth } from "../../hook/auth";


import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import moment from "moment-timezone";

import { api } from "../../service/api";

import { Header } from "../../components/header"
import { TextButton } from "../../components/textButton"
import { Rating } from '../../components/rating'
import { Tag } from '../../components/tags'

export function Details() {

  const { user } = useAuth();
  
  const [data,setData] = useState();

  const navigate = useNavigate();
  const params = useParams();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

 function handleBack(){
    navigate('/')
 }

 
 async function handleDeleteMovie(){
   
   const confirm = window.confirm("Deseja  realmente excluir esse filme? ")
   
   
   if(confirm){
     await api.delete(`/notes/${params.id}`)
     
     navigate(-1);
    }
  }
  
  const formateDate = moment
  .tz("America/Sao_Paulo")
  .format("DD/MM/YYYY HH:mm a ")

  useEffect(() => {

    async function fetchMovie(){
      const response =  await api.get(`notes/${params.id}`);
      setData(response.data);

    }
    fetchMovie();

  } , [])

  return (
    <Container >
        <Header/>
      
        {

          data &&
         <main>
            <Content>
                
                <div>
                    <TextButton 
                    icon={FiArrowLeft}
                    title="Voltar"
                    onClick={handleBack} 
                     />

                    <h1>{data.title}</h1>
                    <Rating grade={data.rating} isBigSize={true}/>
                    
                    <span><img src={avatarURL} alt={user.name}/> Por {user.name} <FiClock/> {formateDate}</span>

                    {data.tags && 
                      
                      <footer>
                        {
                        data.tags.map(tag =>( 
                        <Tag key={tag.id}
                         title={tag.name}
                        /> ))
                          }
                      </footer>
                      
                    }

                </div>
              
               <p>{data.description}</p>

               <TextButton
               title="Excluir filme" 
               onClick={handleDeleteMovie}
               />
            </Content>

         </main>
      }      
    </Container>
  )
}

