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
                                rating: '5',
                                description: "A melhor saga de todos os tempos"
                            }}>
                        </Movie>


                    </Content>
                </main>
        </Container>

    )


}