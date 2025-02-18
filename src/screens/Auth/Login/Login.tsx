import { FC, useState } from 'react'

import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import { FormData } from '../../../interface/interface'

import styles from './Login.module.scss'

const Login: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Отправленные данные:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.title}>Вход в аккаунт</h1>
        <Input
          placeholder='Телефон'
          type='text'
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
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
