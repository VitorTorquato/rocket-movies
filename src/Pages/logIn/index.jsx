
import { FiMail , FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Container ,Form, Background} from "./styles";


import { Input } from '../../components/input'
import { Button } from '../../components/button'

 
export function LogIn(){

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
                />
                <Input
                   placeholder="Senha"
                   type="password"
                   icon={FiLock} 
                />

                <Button
                    title="Entrar"
                />

                <Link 
                to="/register">Crie sua conta</Link>

            </Form>

            <Background/>

        </Container>
    )

}