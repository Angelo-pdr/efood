import { createBrowserRouter } from 'react-router-dom'
import Perfil from './pages/Perfil'
import Home from './pages/Home'
import App from './App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/perfil/:id',
        element: <Perfil />
      }
    ]
  }
])

export default Router
