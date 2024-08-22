import { useContext, useMemo } from "react";
import { ThemeContext, LocaleContext } from "./context";



const MainContent = () =>{
    const {theme} = useContext(ThemeContext)
    const {locale} = useContext(LocaleContext)



    return (
        <main style={{background: theme === 'light' ? 'fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
            <p>{locale === 'en' ? 'Hello World!' : 'Bonjur le monde!'}</p>
        </main>
    )
}

export default MainContent



// useMemo
// useCallback

// Router