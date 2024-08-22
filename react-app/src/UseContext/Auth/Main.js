import { useContext } from "react";
import { AuthContext } from "./AuthContext";


const Main = () =>{


    const {isAuthenticated, login} = useContext(AuthContext)

    return(
        <main>
            {isAuthenticated ? (<p>Welcome Back!</p>) : (<button onClick={login}>Login</button>)}
        </main>
    )
}


export default Main