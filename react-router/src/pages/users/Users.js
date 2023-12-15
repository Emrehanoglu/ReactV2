import { useLoaderData, Link } from "react-router-dom"

export const Users = () => {
    const users = useLoaderData() /* loader ile ilişkilendirdiğim data gelmiş olur */
    return(
        <div className="users" >
            {
                users.map(user => (
                    <div className="card" key={user.id}>
                        <h3>
                            <i className="fa-solid fa-caret-right"></i> {user.name}
                        </h3>
                        <Link to={user.id.toString()}>
                            <i className="fa-regular fa-square-caret-right"></i>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
} 

export const userLoader = async () => { /* servis üzerinden kullanıcı bilgilerini aldım */
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    if(res.status === 404){ /* status bilgisi servisten geliyor */
        throw new Response("Kaynak Bulunamadı", {status : 404})
    }
    return res.json()
}