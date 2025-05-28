import { createBrowserRouter } from 'react-router-dom'

import Card from '../screens/Card/Card'
import Cart from '../screens/Cart/Cart'
import Error from '../screens/Error/Error'
import Favorite from '../screens/Favorite/Favorite'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/card/:id',
    element: <Card />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/favorite',
    element: <Favorite />
  }
])
