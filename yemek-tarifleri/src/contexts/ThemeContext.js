import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [color, setColor] = useState('success')
    const changeColor = (value) => {
        setColor(value)
    }
    return (
        <ThemeContext.Provider value={{color, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}