import { Routes , Route , Navigate} from 'react-router-dom'

import { SignIn  } from '../Pages/signIn'
import { LogIn } from '../Pages/logIn'


export function AuthRoutes(){

    
    const user = localStorage.getItem("@rocketmovies:user");    

    return (
        <Routes>
            <Route path='/register' element={<SignIn/>}/>
            <Route path='/' element={<LogIn/>}/>

            {!user && <Route path='*' element={<Navigate to="/"/>}/>}
        </Routes>
    )



}   