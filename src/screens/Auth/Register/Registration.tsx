import { FC, useState } from 'react'

import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'

import { FormDataRegister } from '../../../interface/interface'
import { RegisterService } from '../../../services/auth.service'

import styles from './Registration.module.scss'

const Registration: FC = () => {
  const [formData, setFormData] = useState<FormDataRegister>({
    name: '',
    email: '',
    phone: '',
    city: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await RegisterService(
      formData.name,
      formData.phone,
      formData.city,
      formData.email,
      formData.password
    )
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
