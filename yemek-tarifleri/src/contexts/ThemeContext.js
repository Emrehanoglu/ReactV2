import { createContext, useReducer } from "react";
import themeReducer from "../reducers/themeReducer";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    /* const [color, setColor] = useState('success') */

    const [state, dispatch] = useReducer(themeReducer, {
        color: 'warning',
        mode: 'dark'
    })

    const changeColor = (value) => {
        /* setColor(value) */
        dispatch({type: 'CHANGE_COLOR', payload: value})
    }
    const changeMode = (value) => {
        dispatch({type: "CHANGE_MODE", payload: value})
    }
    return (
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}