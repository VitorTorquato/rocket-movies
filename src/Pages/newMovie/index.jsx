import { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Container , Form } from "./styles";

import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

import { api } from '../../service/api';

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { Section } from '../../components/section'
import { MovieItem } from '../../components/movieItem'
import { Button } from '../../components/button'
import { TbUvIndex } from 'react-icons/tb';
 

export function NewMovie(){

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [rating,setRating] = useState("");
    const [description,setDescription] = useState("");


    const [tags,setTags] = useState([]);
    const [newTag, setNewTag] = useState("");


    function handleAddTag(){
        setTags(prevState => [...prevState,newTag]);
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))


    }

    async function handleNewMovie(){

       try{
        if(!title){
           return alert('digite o titulo do filme')
        }

        const isRatingCorrect = rating >= 0 && rating <= 5;

        if(!isRatingCorrect){
           return alert("A nota do filme deve ser entre 0 e  5")
        }

        if(newTag){
            return ("Adicione a tag que você deixou no campo de adicionar")
        }

        

        await api.post("/notes" , {
            title,
            rating,
            description,
            tags
        })

        alert("Filme cadastrado com sucesso");


        navigate('/')
    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }else{
            alert("Não foi possivel cadastrar a nota!")
        }
    }
    

    }       

    

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
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                             placeholder="Sua nota de 0 a 5"
                             onChange={(e) => setRating(e.target.value)}
                            />
                        </div>

                        <TextArea  
                        placeholder="Observaçoes"
                        onChange={(e) => setDescription(e.target.value)}
                        />
                            
                            <Section title="Marcadores">
                            <div className='tags'>
                                {   
                                    tags.map((tag, index) => (

                                        <MovieItem
                                            key={String(index)}
                                            value={tag}
                                            onClick={( ) => {handleRemoveTag(tag)}}
                                        
                                        
                                        />

                                    ))

                                }

                                <MovieItem 
                                isNew
                                placeholder="Novo marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}    
                                
                                />
                              

                            </div> 
                                    
                            </Section>

                            <div className='buttons'>
                                <Button title="Excluir filme"/>
                                <Button 
                                title="Salvar alterações"
                                onClick={handleNewMovie}
                                />
                            </div>
                    </Form>
                </main>
        </Container>
    )


}