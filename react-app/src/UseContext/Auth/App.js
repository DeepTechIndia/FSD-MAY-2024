import { useState } from "react";
import { AuthContext } from "./AuthContext";
import Main from "./Main";
import Header from "./Header";


const App =() =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)

    return(
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            <Header />
            <Main />
        </AuthContext.Provider>
        
    )
}


export default App