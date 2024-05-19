import { useState , useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Container ,Content, AddMovie } from "./styles";

import { api } from '../../service/api';

import { Header } from '../../components/header'
import { Movie } from '../../components/movie';


 
export function Home(){


    const [ notes,setNotes] = useState([]);
    const [search , setSearch] = useState("")
   

    useEffect(() => {
        async function fetchTitle(){
            const response = await api.get(`/notes?title=${search}`)

            
            setNotes(response.data);
            
        }
        
        fetchTitle();
    }, [search ]);


    return(
        <Container>
            <Header>
            <input type="text" 
            placeholder="Pesquise pelo título"
            onChange={e => setSearch(e.target.value)}

             />

            </Header>
                <main>
                        <header>
                            <h1>Meus Filmes</h1>

                            <AddMovie to="new">
                                <FiPlus/>
                                Adicionar filme
                            </AddMovie>
                        </header>
                        
                    <Content>
                        
                     
                    {
                        notes.map(movie => (
                            <Movie
                                key={movie.id}
                                data={movie}
                            />

                        ))
                    }                            
                        
                   
                


                    </Content>
                </main>
        </Container>

    )


}