import { useState } from 'react'

import { CartItem } from '../../screens/Cart/Cart'

import { $axios } from '../../api'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Title from '../Title/Title'

import styles from './Payment.module.scss'

interface IPayment {
  setSuccessPay: (successPay: boolean) => void
  cartItems: CartItem[]
}

const Payment = ({ setSuccessPay, cartItems }: IPayment) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    pickupPoint: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Маски для полей ввода
  const maskCardNumber = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .substring(0, 19)
  }

  const maskExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substring(0, 5)
  }

  const maskCVV = (value: string) => {
    return value.replace(/\D/g, '').substring(0, 3)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    if (
      !formData.cardNumber.replace(/\s/g, '') ||
      !formData.cardHolder ||
      !formData.expiryDate ||
      !formData.cvv ||
      !formData.pickupPoint
    ) {
      setError('Пожалуйста, заполните все поля')
      return
    }

    setLoading(true)
    setError('')

    try {
      if (cartItems.length === 0) {
        throw new Error('Корзина пуста')
      }

      const orderData = {
        items: cartItems.map((item: any) => ({
          productId: item.productId,
          quantity: item.quantity
        })),
        paymentDetails: {
          cardNumber: formData.cardNumber.replace(/\s/g, ''),
          cardHolder: formData.cardHolder,
          expiryDate: formData.expiryDate,
          cvv: formData.cvv
        },
        pickupPoint: formData.pickupPoint
      }

      await $axios.post('/orders', orderData)

      setSuccessPay(true)

      await $axios.delete('/cart')
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Ошибка при оформлении заказа'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.payment}>
      <Title>Оплата товаров</Title>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.row}>
        <div className={styles.form}>
          <Input
            name='cardNumber'
            placeholder='Номер карты'
            value={formData.cardNumber}
            onChange={handleInputChange}
            mask={maskCardNumber}
          />
          <Input
            name='cardHolder'
            placeholder='Держатель карты'
            value={formData.cardHolder}
            onChange={handleInputChange}
          />
          <div className={styles.form__row}>
            <Input
              name='expiryDate'
              placeholder='ММ/ГГ'
              value={formData.expiryDate}
              onChange={handleInputChange}
              mask={maskExpiryDate}
            />
            <Input
              name='cvv'
              placeholder='CVV/CVC'
              value={formData.cvv}
              onChange={handleInputChange}
              mask={maskCVV}
            />
          </div>

          <select
            name='pickupPoint'
            value={formData.pickupPoint}
            onChange={handleInputChange}
          >
            <option value='' disabled>
              Выберите пункт выдачи
            </option>
            <option value='Комсомольская улица, 22'>
              Комсомольская улица, 22
            </option>
          </select>
        </div>
        <div className={styles.image}>
          <img src='/images/qr.svg' alt='qr' />
          <div className={styles.image__text}>
            Отсканируйте <span>QR-код</span> для оплаты товаров
          </div>
        </div>
      </div>
      <Button size='large' onClick={handleSubmit} disabled={loading}>
        {loading ? 'Обработка...' : 'Оплатить'}
      </Button>
    </div>
  )
}

export default Payment
