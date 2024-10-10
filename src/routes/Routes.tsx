import { createBrowserRouter } from 'react-router-dom'

import Home from '../screens/Home/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])
