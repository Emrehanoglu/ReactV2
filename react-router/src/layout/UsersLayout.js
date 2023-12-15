import { Outlet } from "react-router-dom"
export const UsersLayout = () => {
    return (
        <div className="users-layout">
            <h1>Users</h1>
            <p>Kullanıcı bilgilerinin bulunduğu sayafadır. Kullanıcı listesi üzerinden kullanıcı detaylarına giderek
                bilgi edinebilirsiniz.
            </p>
            
            <Outlet />
        </div>
    )
}