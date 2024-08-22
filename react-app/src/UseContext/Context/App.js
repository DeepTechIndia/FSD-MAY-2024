import { useState, useTransition } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";


const App = () =>{
    const [theme, setTheme] = useState('light')

    const toggleTheme = () =>{
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            <ThemeSwitcher />
        </ThemeContext.Provider>
    )
}


export default App
