import { FC, useState } from 'react'

import styles from './Auth.module.scss'
import Login from './Login/Login'
import Registration from './Register/Registration'

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(true)

  return (
    <div className={styles.container}>
      {isLogin ? <Login /> : <Registration />}
      <p className={styles.reg}>
        {isLogin ? (
          <>
            У вас ещё нет аккаунта?{' '}
            <span onClick={() => setIsLogin(!isLogin)}>Зарегистрироваться</span>
          </>
        ) : (
          <>
            У вас уже есть аккаунт?
            <span onClick={() => setIsLogin(!isLogin)}>Войти</span>
          </>
        )}
      </p>
    </div>
  )
}

export default Auth
