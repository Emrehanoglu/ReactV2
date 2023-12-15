import { useLoaderData, Link } from "react-router-dom"

export const UserDetails = () => {
    const user = useLoaderData();
    return(
        <div className="user-details">
            <h3>
                <i className="fa-solid fa-caret-right"></i> {user.name} 
            </h3>
            <ul>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.company.name} / {user.address.city}</div>
            </ul>   
            <Link to="/users">Back To List</Link>
        </div>
    )
}

export const userDetailsLoader = async ({params}) => {
    const {userid} = params
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + userid)

    if(res.status === 404){ /* status bilgisi servisten geliyor */
        throw new Response("Kaynak Bulunamadı", {status : 404})
    }
    return res.json()
}