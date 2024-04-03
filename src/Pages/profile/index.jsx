import {FiArrowLeft , FiCamera , FiMail , FiLock, FiUser } from 'react-icons/fi'
  
import { Link } from "react-router-dom";

import { Container , Form , Avatar } from "./styles";

import { Input } from '../../components/input'
 import { Button } from '../../components/button'

import { TextButton } from '../../components/textButton'
export function Profile(){
    return (
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/>Voltar</Link>
            </header>
                 
                <Form>
                    <Avatar>
                        <img src="https://github.com/vitortorquato.png" alt="foto de perfil de vitor torquato" />

                        <label htmlFor="avatar">
                            <FiCamera/>
                            <input 
                            id='avatar'
                            type="file" />
                        </label>
                    </Avatar>

                    <Input 
                        placeholder="Nome"
                        type="text"
                        icon={ FiUser}
                    />
                    <Input 
                        placeholder="E-Mail"
                        type="email"
                        icon={ FiMail}
                    />
                    <Input 
                        placeholder="Senha atual"
                        type="password"
                        icon={ FiLock}
                    />
                    <Input 
                        placeholder="Nova senha"
                        type="password"
                        icon={ FiLock}
                    />

                    <Button title="Salvar"/>
               </Form>

        </Container>
    )

}