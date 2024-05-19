import { useState, useEffect } from "react";

import { Container,Search,Profile ,Logout} from "./styles";

import { api } from "../../service/api";

import { useAuth } from "../../hook/auth";


import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'





export function Header({children}){

        

        const { logOut , user} = useAuth();

        const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

        
      

        return(
            <Container>
                <h2>RocketMovies</h2>
                <Search>
                   {children}
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