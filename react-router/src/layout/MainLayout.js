import { NavLink, Outlet, useNavigation } from "react-router-dom"
import Loading from '../pages/Loading'

export const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div className="main-layout">
            <header className="container">
                <h1>React Router</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="users">Users</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
            </header>
            <main className="container">
                {navigation.state === "loading" && <Loading />}
                <Outlet /> {/* Alt component içerikleri burada gösterilir */}
            </main>
        </div>
    )
}