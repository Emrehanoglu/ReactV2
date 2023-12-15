import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'
import {About} from './pages/About'
import {Faq} from './pages/help/Faq'
import {Contact, contactAction} from './pages/help/Contact'

import { MainLayout } from './layout/MainLayout';
import { HelpLayout } from './layout/HelpLayout';
import { UsersLayout } from './layout/UsersLayout';
import { Users, userLoader } from './pages/users/Users';
import { UserDetails, userDetailsLoader } from './pages/users/UserDetails'
import UsersError from './pages/users/UsersError'

const router = createBrowserRouter([
  { 
    path : "/", /* ana sayfa path 'i */
    element: <MainLayout />, /* ekrandaki sabit layout kısmı */
    children: [ /* alt componentler ekrandaki değişen kısım, MainLayout içerisindeki Outlet tag 'ini karşılar */
      {path: '/' , element: <Home />},
      {path: 'home' , element: <Home />},
      {path: 'about' , element: <About />},
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {path: "contact", element: <Contact />, action: contactAction},
          {path: "faq", element: <Faq />}
        ]
      },
      {
        path: 'users',
        element: <UsersLayout />,
        errorElement: <UsersError/>, 
        /* UsersLayout u altındaki children componentlerin herhangi birinden fırlatılan
        hata UsersError içerisinde yakalanır. */
        children: [
          {index: true , element: <Users />, loader: userLoader}, /* index:true, url de users yazıyorsa demek */
          /* users linkine gidildiği anda usersLoader ile servis üzerinden alınan bilgiler de gelir*/
          {path: ':userid', element: <UserDetails />, loader: userDetailsLoader}
        ]
      },
      {path: "*", element: <NotFound />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
