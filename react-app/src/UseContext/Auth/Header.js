import { useContext } from "react"
import { AuthContext } from "./AuthContext"

const Header = () =>{

    const {isAuthenticated, logout} = useContext(AuthContext)

    return (
        <header>
            {isAuthenticated ? ( <button onClick={logout}>Logout</button> ) : (<p>Please Log in</p>)}
        </header>
    )
}


export default Header