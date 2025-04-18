import { createBrowserRouter } from 'react-router-dom'

import Card from '../screens/Card/Card'
import Error from '../screens/Error/Error'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'

import Layout from '../components/Layout/Layout'

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
    element: (
      <Layout>
        <Profile />
      </Layout>
    )
  }
])
