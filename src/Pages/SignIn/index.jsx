
import { FiMail , FiLock} from 'react-icons/fi'

import { Container ,Form, Background} from "./styles";


import { Input } from '../../components/input'
import { Button } from '../../components/button'

 
export function SignIn(){

    return(
        <Container>
            <Form>
                <h1>RocketMovie</h1>
                <p>Acompanhe e de nota a os filmes que assitir</p>

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

                <a href="/">Crie sua conta</a>

            </Form>

            <Background/>

        </Container>
    )

}