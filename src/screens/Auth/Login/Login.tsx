import { FC, useState } from 'react'

import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import { FormDataAuth } from '../../../interface/interface'
import { AuthService } from '../../../services/auth.service'

import styles from './Login.module.scss'

const Login: FC = () => {
  const [formData, setFormData] = useState<FormDataAuth>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { message } = await AuthService(formData.email, formData.password)
    if (message === 'Успешная авторизация') {
      console.log(message)
      window.location.reload()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.title}>Вход в аккаунт</h1>
        <Input
          placeholder='Телефон'
          type='email'
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder='Пароль'
          type='password'
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <Button size='normal' type='submit'>
          Войти
        </Button>
      </div>
    </form>
  )
}

export default Login
