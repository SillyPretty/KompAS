import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'

import { $axios } from '../../api'

import styles from './SearchScreen.module.scss'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  description: string
  specifications: {
    title: string
    content: string
  }[]
}

const SearchScreen = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { title } = useParams<{ title: string }>()

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      if (title === 'all') {
        const { data } = await $axios.get('/products')
        setCartItems(data)
      } else {
        const { data } = await $axios.get(`/products/search/${title}`)
        setCartItems(data.results)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

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
      <div className={styles.container}>
        <Title>
          {title === 'all' ? <>Все товары</> : <>Товары по запросу "{title}"</>}
        </Title>
        {cartItems.map(item => {
          return (
            <div className={styles.container__card} key={item.id}>
              <div className={styles.image}>
                <img src={item.image} alt={item.name} />
              </div>{' '}
              <Link to={`/card/${item.id}`}>
                <div className={styles.card__body}>
                  <div className={styles.card__title}>
                    <span>{item.name} </span>
                    {item.description}
                  </div>
                  <div>
                    {item.specifications
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
              </Link>
              <div className={styles.price}>
                {item.price} <span>₽</span>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default SearchScreen
