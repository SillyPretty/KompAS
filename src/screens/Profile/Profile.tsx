import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { isAuth } from '../../hooks/useAuth'

import Layout from '../../components/Layout/Layout'

import { $axios } from '../../api'
import { TOKEN } from '../../app.constants'

import styles from './Profile.module.scss'

interface User {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
  updatedAt: string
  orders: {
    id: string
    createdAt: string
    items: {
      id: string
      product: {
        id: string
        name: string
        price: number
      }
      quantity: number
    }[]
  }[]
  cart: {
    items: any[]
  }
}

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const isAuthorization = isAuth()

  useEffect(() => {
    if (!isAuthorization) {
      navigate('/')
    } else {
      fetchUserProfile()
    }
  }, [isAuthorization])

  const fetchUserProfile = async () => {
    try {
      const { data } = await $axios.get('/auth/profile')
      setUser(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const LogOut = () => {
    Cookies.remove(TOKEN)
    window.location.reload()
  }

  if (loading) {
    return (
      <Layout>
        <div className='container'>Loading...</div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className='container'>Error: {error}</div>
      </Layout>
    )
  }

  if (!user) {
    return (
      <Layout>
        <div className='container'>User not found</div>
      </Layout>
    )
  }
  console.log(user)

  return (
    <Layout>
      <div className='container'>
        <div className={styles.container__header}>
          <h2>Профиль</h2>
          <button onClick={LogOut}>
            <img src='/images/icons/Exit_logo.svg' alt='exit_logo' />
          </button>
        </div>
        <div className={styles.container__content}>
          <div className={styles.profile__data}>
            <img src='/images/icons/user_profile.svg' alt='user_icon' />
            <div className={styles.user__info}>
              <h3>{user.name}</h3>
              <p>
                E-mail <span>{user.email}</span>
              </p>
              <p>
                Дата регистрации{' '}
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </p>
            </div>
          </div>
          <div className={styles.order}>
            <h3>История заказов</h3>
            {user.orders.length > 0 ? (
              user.orders.map(order => (
                <div key={order.id}>
                  <p>
                    Заказ от{' '}
                    <span>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                  <ul>
                    {order.items.map(item => (
                      <li key={item.id}>
                        {item.product.name} - {item.quantity} шт. ×{' '}
                        {item.product.price} ₽
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>У вас пока нет заказов</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
