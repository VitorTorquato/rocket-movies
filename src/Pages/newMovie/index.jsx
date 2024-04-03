import { FiArrowLeft } from 'react-icons/fi'
import { Container , Form } from "./styles";

import { Link } from "react-router-dom";

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { MovieItem } from '../../components/movieItem'
import { Button } from '../../components/button'
 

export function NewMovie(){
    return(
        <Container>
            	<Header/>
                <main>
                    <Form>
                        <header>
                            <Link to='/' > <FiArrowLeft/> Voltar</Link>
                            <h1>Novo filme</h1>
                        </header>
                        
                    
                        
                        <div>
                            <Input
                            placeholder="Título"
                            />
                            <Input placeholder="Sua nota de 0 a 5"/>
                        </div>

                        <TextArea  placeholder="Observaçoes"/>
                            
                            <Section title="Marcadores">
                            <div className='tags'>
                                <MovieItem
                                    value="React"
                                    
                                />
                                <MovieItem isNew placeholder="Novo marcador"/>
                              

                            </div> 
                                    
                            </Section>

                            <div className='buttons'>
                                <Button title="Excluir filme"/>
                                <Button title="Salvar alterações"/>
                            </div>
                    </Form>
                </main>
        </Container>
    )


}