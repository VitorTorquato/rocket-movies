import { FiArrowLeft } from 'react-icons/fi'
import { Container , Form } from "./styles";

import { Header } from '../../components/header'
import { Tag } from '../../components/tags'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
 

export function NewMovie(){
    return(
        <Container>
            	<Header/>
                <main>Marca
                    <Form>
                        <header>
                            <a href="/"> <FiArrowLeft/> Voltar</a>
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
                                
                                
                                   <Tag/>
                                
                            </Section>
                    
                    </Form>
                </main>
        </Container>
    )


}