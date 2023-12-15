import { useRouteError,Link } from "react-router-dom"

export default function UsersError(){
    const error = useRouteError()
    return(
        <div>
            <h1>Error</h1>
            <p>{error.data}</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}