import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Details from './pages/details/Details'
import Create from './pages/create/Create'

const routes = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/create', element: <Create />},
  {path: '/details/:id', element: <Details />},
  {path: '/search', element: <Search />},
])

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;