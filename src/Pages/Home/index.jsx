import { FiPlus } from 'react-icons/fi'
import { Container ,Content, AddMovie } from "./styles";


import { Header } from '../../components/header'
import { Movie } from '../../components/movie';

 
export function Home(){
    return(
        <Container>
            <Header/>
                <main>
                        <header>
                            <h1>Meus Filmes</h1>

                            <AddMovie>
                                <FiPlus/>
                                Adicionar filme
                            </AddMovie>
                        </header>
                        
                    <Content>
                        <Movie
                            data={{
                                title: "Star Wars",
                                rating: '4',
                                description: "Em Star Wars: Episódio VI, o Imperador Palpatine (Ian McDiarmid) está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso, Luke Skywalker (Mark Hamill) liberta Han Solo (Harrison Ford) e a Princesa Leia (Carrie Fisher) das mãos de Jabba, o pior bandido das galáxias. Luke só se tornará um cavaleiro Jedi quando destruir Darth Vader, que ainda pretende atraí-lo para o lado negro da Força. No entanto a luta entre os dois vai revelar um inesperado segredo.",
                                author: "Vitor Torqauto",
                                created_at: "27/05/2024 ás 08:00AM"
                            }}>
                        </Movie>
                


                    </Content>
                </main>
        </Container>

    )


}