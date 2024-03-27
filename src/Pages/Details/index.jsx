import { Container , Content } from "./styles"

import { FiArrowLeft ,  FiClock  } from "react-icons/fi";

import { Header } from "../../components/header"
import { TextButton } from "../../components/textButton"
import { Rating } from '../../components/rating'
import { Tag } from '../../components/tags'

export function Details() {
  
   let data={
    title: "Star Wars",
    rating: '4',
    description: "Em Star Wars: Episódio VI, o Imperador Palpatine (Ian McDiarmid) está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso, Luke Skywalker (Mark Hamill) liberta Han Solo (Harrison Ford) e a Princesa Leia (Carrie Fisher) das mãos de Jabba, o pior bandido das galáxias. Luke só se tornará um cavaleiro Jedi quando destruir Darth Vader, que ainda pretende atraí-lo para o lado negro da Força. No entanto a luta entre os dois vai revelar um inesperado segredo.",
    author: "Vitor Torqauto ",
    created_at: "27/05/2024 ás 08:00AM",
    tags: [
        { id: "1" , name:"Ficção Ciêntifica"},
        { id: "2" , name:"Ação"},
        { id: "3" , name:"Aventura"}
    ]
    
} ;


  return (
    <Container >
        <Header/>
      
         <main>
            <Content>
                { data && (
                <div>
                    <TextButton icon={FiArrowLeft} title="Voltar"/>
                    <h1>{data.title}</h1>
                    <Rating grade={data.rating} isBigSize={true}/>
                    
                    <span><img src="https://github.com/vitortorquato.png" alt="foto de vitor torquato"/> Por {data.author} <FiClock/> {data.created_at}</span>

                    {data.tags && 
                      <footer>
                        {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/> )
                          }
                      </footer>
                      
                    }

                </div>
               )}  
               <p>{data.description}</p>
            </Content>
         </main>
      
    </Container>
  )
}

