import clsx from 'clsx'
import Cookies from 'js-cookie'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import MyMapComponent from '../../components/Map/Map'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'

import { $axios } from '../../api'

import styles from './Card.module.scss'

const colors = ['#000000', '#F6F6F6', '#00083D', '#FFE8AA']

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
  image: string
  specifications: {
    title: string
    content: string
  }[]
  similarProducts?: Product[]
}

interface CartItem {
  productId: string
  inCart: boolean
}

const Card: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeColor, setActiveColor] = useState(0)
  const [change, setChange] = useState(1)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await $axios.get(`/products/${id}`)
        setProduct(data)

        const cartCookie = Cookies.get('cart')
        if (cartCookie) {
          setCartItems(JSON.parse(cartCookie))
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        )
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  const addToCart = async () => {
    if (!product) return

    try {
      await $axios.post('/cart/', { productId: product.id, quantity: 1 })

      const updatedCart = [
        ...cartItems.filter(item => item.productId !== product.id),
        { productId: product.id, inCart: true }
      ]

      setCartItems(updatedCart)
      Cookies.set('cart', JSON.stringify(updatedCart), {
        expires: 30,
        path: '/'
      })
    } catch (error) {
      console.error('Error adding to cart:', error)
      setError('Failed to add to cart')
    }
  }

  const isInCart = (productId: string) => {
    return cartItems.some(item => item.productId === productId && item.inCart)
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

  if (!product) {
    return (
      <Layout>
        <div className='container'>Product not found</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.container}>
        <img
          src={product.image || '/images/placeholder-product.png'}
          alt={product.name}
        />
        <div className={styles.content}>
          <Title position='left'>
            {product.name} {product.description}
          </Title>
          <div className={styles.color__container}>
            <div>Цвет:</div>
            <div className={styles.color__change}>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={clsx(
                    styles.color__item,
                    index === activeColor && styles.color__item_active
                  )}
                  onClick={() => setActiveColor(index)}
                  style={{
                    background: color
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.price__container}>
            <div className={styles.price}>
              {product.price} <span>₽</span>
            </div>
            <Button size='large' onClick={addToCart}>
              {isInCart(product.id) ? 'В корзине' : 'Добавить в корзину'}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.change__container}>
        <div className={styles.change__header}>
          <div
            className={clsx(
              styles.change__header_item,
              change === 1 && styles.change__header_item_active
            )}
            onClick={() => setChange(1)}
          >
            О товаре
          </div>
          <div
            className={clsx(
              styles.change__header_item,
              change === 3 && styles.change__header_item_active
            )}
            onClick={() => setChange(3)}
          >
            Пункты выдачи
          </div>
        </div>
        {change === 1 && (
          <div className={styles.change__body}>
            <Title stylesheet={styles.change__body_title}>Характеристики</Title>
            <div className={styles.change__body_container}>
              {product.specifications.map((item, index) => (
                <div className={styles.change__body_item} key={index}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {change === 3 && (
          <div className={styles.change__body}>
            <Title stylesheet={styles.change__body_title}>
              Пункты выдачи в г. Донском
            </Title>
            <MyMapComponent />
          </div>
        )}
      </div>
      {product.similarProducts && product.similarProducts.length > 0 && (
        <div className={styles.container__}>
          <Slider title='Похожие товары' data={product.similarProducts} />
        </div>
      )}
    </Layout>
  )
}

export default Card
