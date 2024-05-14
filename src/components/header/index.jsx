import { Container,Search,Profile ,Logout} from "./styles";


import { useAuth } from "../../hook/auth";




export function Header(){

        const { logOut} = useAuth();

      


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
                        
                    </div>
                    <img src="https://github.com/vitortorquato.png" alt="foto do usuario do github Vitor Torquato" />
                </Profile>
                <Logout
                         type="button"
                         onClick={logOut}
                        >
                            Sair
                        </Logout>
            </Container>
        )

}