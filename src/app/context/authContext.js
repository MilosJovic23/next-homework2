import {useEffect, useState} from "react";
import {auth} from "@/app/firebase"

const AuthContext = React.createContext(null)

}
 const AuthProvider = ({children}) => {
    const[user,setUser]=useState();
    const[loggedIn,setLoggedIn]=useState(false);
    const[isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        return auth.onAuthStateChanged(setupInitialUser)
     },[])
    const setupInitialUser = (authUser)=>{
        if(authUser){
            setUser(authUser);
            setLoggedIn(true)
        }
        setIsLoading(false)
    }
}