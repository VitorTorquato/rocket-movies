import {FiArrowLeft } from 'react-icons/fi'
  
import { Container } from "./styles";

import { TextButton } from '../../components/textButton'
export function Profile(){
    return (
        <Container>
            <header>
                <TextButton icon={FiArrowLeft} title="Voltar"/>
            </header>
        </Container>
    )

}