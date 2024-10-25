import { createBrowserRouter } from 'react-router-dom'

import Card from '../screens/Card/Card'
import Home from '../screens/Home/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/card/:id',
    element: <Card />
  }
])
