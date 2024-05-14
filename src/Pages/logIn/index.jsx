import { useState } from 'react';
import { FiMail , FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Container ,Form, Background} from "./styles";

import { useAuth } from '../../hook/auth';

import { Input } from '../../components/input'
import { Button } from '../../components/button'


 
export function LogIn(){


    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");

    const { signIn } = useAuth();


    function handleSignIn(){
        signIn({email,password})
    }


    return(
        <Container>
            <Form>
                <h1>RocketMovie</h1>
                <p>Acompanhe e de nota aos filmes que assitir</p>

                <h2>Faça seu login</h2>

                <Input
                   placeholder="E-Mail"
                   type="email"
                   icon={FiMail} 
                   onChange={e => setEmail(e.target.value)}
                />
                <Input
                   placeholder="Senha"
                   type="password"
                   icon={FiLock} 
                   onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSignIn}
                />

                <Link 
                to="/register">Crie sua conta</Link>

            </Form>

            <Background/>

        </Container>
    )

}