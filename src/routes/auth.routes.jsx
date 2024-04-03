import { Routes , Route} from 'react-router-dom'

import { SignIn  } from '../Pages/signIn'
import { LogIn } from '../Pages/logIn'


export function AuthRoutes(){

    return (
        <Routes>
            <Route path='/register' element={<SignIn/>}/>
            <Route path='/login' element={<LogIn/>}/>
        </Routes>
    )



}   