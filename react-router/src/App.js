import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Faq} from './pages/help/Faq'
import {Contact} from './pages/help/Contact'

import { MainLayout } from './layout/MainLayout';
import { HelpLayout } from './layout/HelpLayout';

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
          {path: "contact", element: <Contact />},
          {path: "faq", element: <Faq />}
        ]
      }
    ]}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
