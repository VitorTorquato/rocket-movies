import { createContext , useContext , useState , useEffect } from "react";

import { api } from '../service/api'


const AuthContext = createContext({});


function AuthProvider({children}){

    const[data, setData] = useState({})


    async function signIn({ email, password}){

        try{

        const response =  await api.post("/sessions" , { email , password});
        const { user , token} = response.data;


        localStorage.setItem("@rocketmovies:user" , JSON.stringify(user));    
        localStorage.setItem("@rocketmovies:token" , token );    


         api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

         setData({user,token})


        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel entrar!")
            }
        }

    }

    function logOut(){

        const user = localStorage.removeItem("@rocketmovies:user");    
        const token = localStorage.removeItem("@rocketmovies:token");


        setData({});
    }

    useEffect(() => {

        const user = localStorage.getItem("@rocketmovies:user");    
        const token = localStorage.getItem("@rocketmovies:token");    

        if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;


            setData({
                user : JSON.parse(user),
                token
            })
        }


    } , []);


return(

    <AuthContext.Provider value={{
        signIn,
        logOut,
        user: data.user
    }}
    
    >
        {children}
    </AuthContext.Provider>

)


}

function useAuth(){
    
    const context = useContext(AuthContext);

    return context

}

export {AuthProvider , useAuth}