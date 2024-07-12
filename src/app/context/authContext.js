import {useState} from "react";
import {auth} from "firebase/auth"

const AuthContext = React.createContext(null)

}
 const AuthProvider = ({children}) => {
    const[user,setUser]=useState();
    const[loggedIn,setLoggedIn]=useState(false);

    const setupInitialUser = (authUser)=>{
        if(authUser){
            setUser(authUser);
            setLoggedIn(true)
        }
    }
}