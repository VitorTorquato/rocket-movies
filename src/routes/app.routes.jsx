import { Routes , Route} from 'react-router-dom'

import { NewMovie } from '../Pages/newMovie'
import { Home } from '../Pages/Home'
import { Details }  from '../Pages/Details'
import { Profile } from '../Pages/profile'


export function AppRoutes(){

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new' element={<NewMovie/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    )



}   