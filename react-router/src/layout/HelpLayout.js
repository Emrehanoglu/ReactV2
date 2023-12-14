import { Outlet, NavLink } from "react-router-dom"
export const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h1>Help</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus aspernatur minima dicta qui corporis deserunt ducimus consequuntur dolores quis odit quaerat veritatis, 
                a recusandae officia corrupti temporibus, laudantium maxime?</p>
            
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">Faq</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}