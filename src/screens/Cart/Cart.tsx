import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { isAuth } from '../../hooks/useAuth'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import Payment from '../../components/Payment/Payment'
import SuccessPay from '../../components/Payment/SuccessPay'
import Title from '../../components/Title/Title'

import { $axios } from '../../api'

import styles from './Cart.module.scss'

export interface CartItem {
  id: string
  product: {
    id: string
    name: string
    price: number
    image: string
    specifications: {
      title: string
      content: string
    }[]
  }
  quantity: number
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [payment, setPayment] = useState(false)
  const [successPay, setSuccessPay] = useState(false)
  const navigate = useNavigate()
  const isAuthorization = isAuth()

  useEffect(() => {
    if (!isAuthorization) {
      navigate('/auth')
    } else {
      fetchCartItems()
    }
  }, [isAuthorization])

  const fetchCartItems = async () => {
    try {
      const { data } = await $axios.get('/auth/profile')
      setCartItems(data.cart.items)
      // Обновляем cookies при загрузке корзины
      updateCartCookies(data.cart.items)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Функция для обновления cookies корзины
  const updateCartCookies = (items: CartItem[]) => {
    const cartCookie = items.map(item => ({
      productId: item.product.id,
      inCart: true
    }))
    Cookies.set('cart', JSON.stringify(cartCookie), {
      expires: 30,
      path: '/'
    })
  }

  const removeFromCart = async (itemId: string) => {
    try {
      await $axios.delete(`/cart/${itemId}`)

      // Обновляем локальное состояние
      const updatedItems = cartItems.filter(item => item.id !== itemId)
      setCartItems(updatedItems)

      // Обновляем cookies
      updateCartCookies(updatedItems)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item')
    }
  }

  const totalPrice = Number(
    cartItems
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      .toFixed(1)
  )

  if (loading) {
    return (
      <Layout>
        <div className='container'>Loading...</div>
      </Layout>
    )
  }

  if (error || cartItems.length === 0) {
    return (
      <Layout>
        <div className={styles.Layout}>
          <h1 className={styles.title}>Похоже корзина пуста.</h1>
          <p className={styles.subtitle}>Добавьте в неё товары из каталога.</p>
          <Button size='large'>
            <Link to={'/'}>В каталог</Link>
          </Button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {payment && (
        <div className={styles.container__back}>
          <button
            className={styles.btn__close}
            onClick={() => setPayment(false)}
          >
            <img src='/images/icons/close.svg' alt='close' />
          </button>
          <div className={styles.container__order}>
            {successPay ? (
              <SuccessPay />
            ) : (
              <Payment cartItems={cartItems} setSuccessPay={setSuccessPay} />
            )}
          </div>
        </div>
      )}

      <div className={styles.container}>
        <Title>Корзина</Title>
        {cartItems.map(item => {
          return (
            <div className={styles.container__card} key={item.id}>
              <div className={styles.image}>
                <img src={item.product.image} alt={item.product.name} />
              </div>
              <div className={styles.card__body}>
                <div className={styles.card__title}>{item.product.name}</div>
                <div>
                  {item.product.specifications
                    .slice(0, 3)
                    .map((specification, index) => (
                      <div className={styles.card__container} key={index}>
                        <div className={styles.title}>
                          {specification.title}
                        </div>
                        <div className={styles.content}>
                          {specification.content}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.price}>
                {item.product.price * item.quantity} <span>₽</span>
                <div className={styles.quantity}>
                  Количество: {item.quantity}
                </div>
              </div>
              <button
                className={styles.delete}
                onClick={() => removeFromCart(item.id)}
              >
                <img src='/images/icons/close.svg' alt='close.svg' />
              </button>
            </div>
          )
        })}
        <div className={styles.price__container}>
          <div className={styles.price}>
            {totalPrice}
            <span> ₽</span>
          </div>
          <Button size='normal' onClick={() => setPayment(!payment)}>
            Оплатить
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
