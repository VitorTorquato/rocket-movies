import { Container,Search,Profile ,Logout} from "./styles";



import { useAuth } from "../../hook/auth";

import { api } from "../../service/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'





export function Header(){

        const { logOut , user} = useAuth();

        const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;


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
                    <img src={avatarURL}
                    alt={user.name} />
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