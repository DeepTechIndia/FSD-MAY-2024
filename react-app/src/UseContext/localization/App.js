import { useState } from "react";
import { ThemeContext, LocaleContext } from "./context";

import Header from "./Header";
import MainContent from "./MainContent";


const App = () =>{
    const [locale, setLocale] = useState('en')
    const [theme, setTheme] = useState('light')

    const toggleTheme = () =>{
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const changeLocale = () =>{
        setLocale(prevTheme => (prevTheme === 'en' ? 'fr' : 'en'))
    }



    return (

        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <LocaleContext.Provider value={{locale, changeLocale}}>
                <Header />
                <MainContent />

            </LocaleContext.Provider>
            

        </ThemeContext.Provider>
    )
}

export default App