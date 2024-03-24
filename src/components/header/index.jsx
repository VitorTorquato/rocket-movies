import { Container,Profile } from "./styles";
import { Input } from '../input'
 

export function Header(){
        return(
            <Container>
                <h2>RocketMovies</h2>
                <Input placeholder="Pesquise pelo título"/>
                <Profile>
                    <div>
                        <span>Vitor Torquato</span>
                        
                    </div>
                    <img src="https://github.com/vitortorquato.png" alt="foto do usuario do github Vitor Torquato" />
                </Profile>
            </Container>
        )

}