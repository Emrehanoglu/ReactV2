import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import { MainLayout } from './layout/MainLayout';

const router = createBrowserRouter([
  { 
    path : "/", /* ana sayfa path 'i */
    element: <MainLayout />, /* ekrandaki sabit layout kısmı */
    children: [ /* alt componentler ekrandaki değişen kısım, MainLayout içerisindeki Outlet tag 'ini karşılar */
      {path: '/' , element: <Home />},
      {path: '/home' , element: <Home />},
      {path: '/about' , element: <About />},
    ]}
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
