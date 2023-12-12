import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <div className="home">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <h1>Hoş geldiniz</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nesciunt voluptas accusamus fugiat expedita eius nam aperiam impedit architecto voluptatem error a officiis nisi, autem distinctio necessitatibus ipsam esse nostrum!</p>
        </div>
    )
}