
import { FiMail , FiLock, FiUser , FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container ,Form, Background} from "./styles.js"


import { Input } from '../../components/input'
import { Button } from '../../components/button'

 
export function SignIn(){

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
                />
                <Input
                   placeholder="E-Mail"
                   type="email"
                   icon={FiMail} 
                />
                <Input
                   placeholder="Senha"
                   type="password"
                   icon={FiLock} 
                />

                <Button
                    title="Entrar"
                />

                <Link to="/login"> <FiArrowLeft/>  Voltar para o login</Link>

            </Form>

            <Background/>

        </Container>
    )

}