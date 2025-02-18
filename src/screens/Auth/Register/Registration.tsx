import { FC, useState } from 'react'

import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import { FormData } from '../../../interface/interface'

import styles from './Registration.module.scss'

const Registration: FC = () => {
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
        <h1 className={styles.title}>Регистрация</h1>
        <Input
          placeholder='ФИО'
          type='text'
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          placeholder='Телефон'
          type='text'
          value={formData.phone}
          onChange={e => setFormData({ ...formData, phone: e.target.value })}
        />
        <Input
          placeholder='E-mail'
          type='email'
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          placeholder='Ваш город'
          type='text'
          value={formData.city}
          onChange={e => setFormData({ ...formData, city: e.target.value })}
        />
        <Input
          placeholder='Пароль'
          type='password'
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <Button size='normal' type='submit'>
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}

export default Registration
