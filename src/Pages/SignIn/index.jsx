import { useState } from 'react'
import { FiMail , FiLock, FiUser , FiArrowLeft} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Container ,Form, Background} from "./styles.js"

import { api } from '../../service/api.js'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

 
export function SignIn(){

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    	

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            return alert('Preencha todos os campos')
        }

        api.post("/users" , { name , email , password})
        .then(() => {
            alert("Usuário cadastrado com sucesso");
            navigate("/")
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert('Não foi possivel cadastrar o usuário')
            }
        })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovie</h1>
                <p>Acompanhe e de nota aos filmes que assitir</p>

                <h2>Crie sua conta</h2>

                <Input
                   placeholder="Nome"
                   type="text"
                   icon={FiUser} 
                   onChange={e => setName(e.target.value)}
                />
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
                    title="Entrar" onClick={handleSignUp}
                />

                <Link to="/"> <FiArrowLeft/>  Voltar para o login</Link>

            </Form>

            <Background/>

        </Container>
    )

}