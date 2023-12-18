import { useContext } from "react"
import './ThemeSelector.css'
import { ThemeContext } from "../contexts/ThemeContext"
import lightIcon from '../assets/light.svg'
import darkIcon from '../assets/dark.svg'

export const themeColors = ["warning","danger","primary","success","dark"]

export default function ThemeSelector(){
    const {changeColor, changeMode, mode} = useContext(ThemeContext)
    
    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
        /* ThemeContext içerisinden gelen mode bilgisi dark ise light yap,
        light ise dark yap */
    }

    return(
        <div className="container theme-selector">
            <div className="mode-toggle">
                <img src={mode === "dark" ? darkIcon : lightIcon} alt="dark light mode" 
                onClick={toggleMode} />
            </div>
            <div className="theme-links">
                {
                    themeColors.map(color => (
                        <span 
                            key={color}
                            className={`bg-${color}`}
                            onClick={() => changeColor(color)}></span>
                    ))
                }
            </div>
        </div>
    )
}