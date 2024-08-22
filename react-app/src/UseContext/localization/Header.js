import { useContext } from "react";
import { ThemeContext, LocaleContext } from "./context";



const Header = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {locale, changeLocale} = useContext(LocaleContext)


    return (
        <header style={{background: theme === 'light' ? 'fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
            <p>Locale: {locale}</p>
            <button onClick={changeLocale}>Change Locale</button>
            <button onClick={toggleTheme}>Toggle Theme</button>

        </header>
    )


}

export default Header