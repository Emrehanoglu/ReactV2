import { NavLink, Outlet } from "react-router-dom"
export const MainLayout = () => {
    return (
        <div className="main-layout">
            <h1>React Router</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <Outlet /> {/* Alt component içerikleri burada gösterilir */}
        </div>
    )
}