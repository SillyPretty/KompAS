import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { isAuth } from '../../hooks/useAuth'

import { TOKEN } from '../../app.constants'

import styles from './Profile.module.scss'

const user = {
  name: 'Иванов Иван Иванович',
  phone: '8(999)123-12-12',
  email: 'ivanich@gmail.com',
  city: 'Новомосковск'
}

const order = [
  {
    date: '12.09.2024 г.',
    adress: ' ул. Трудовые Резервы, д.16, 2 этаж. '
  },
  {
    date: '10.06.2024 г.',
    adress: ' ул. Трудовые Резервы, д.16, 2 этаж. '
  },
  {
    date: '08.02.2024 г.',
    adress: ' ул. Трудовые Резервы, д.16, 2 этаж. '
  }
]

const Profile = () => {
  const navigate = useNavigate()

  const LogOut = () => {
    Cookies.remove(TOKEN)
    window.location.reload()
  }

  const isAuthorization = isAuth()

  useEffect(() => {
    if (!isAuthorization) return navigate('/')
  }, [isAuthorization])

  return (
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
              Телефон <span>{user.phone}</span>
            </p>
            <p>
              E-mail <span>{user.email}</span>
            </p>
            <p>
              Город <span>{user.city}</span>
            </p>
          </div>
        </div>
        <div className={styles.order}>
          <h3>История заказов</h3>
          {order.map((item, index) => {
            return (
              <p key={index}>
                Заказ от <span>{item.date}</span> на адрес{' '}
                <span> {item.adress}</span>
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile
