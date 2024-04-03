import { Container,Search,Profile ,Logout} from "./styles";





export function Header(){
        return(
            <Container>
                <h2>RocketMovies</h2>
                <Search>
                    <input type="text" 
                    placeholder="Pesquise pelo título"
                     />
                </Search>
                <Profile to='/profile'>
                    <div>
                        <span>Vitor Torquato</span>
                        <Logout type="button">
                            Sair
                        </Logout>
                    </div>
                    <img src="https://github.com/vitortorquato.png" alt="foto do usuario do github Vitor Torquato" />
                </Profile>
            </Container>
        )

}