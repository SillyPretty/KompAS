import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'

import styles from './Favorite.module.scss'

export interface FavoriteItem {
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

const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFavoriteItems()
  }, [])

  const fetchFavoriteItems = () => {
    try {
      const favoritesData = Cookies.get('favorites')
      const parsedFavorites = favoritesData ? JSON.parse(favoritesData) : []
      setFavoriteItems(parsedFavorites)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  const removeFromFavorite = (itemId: string) => {
    try {
      const updatedFavorites = favoriteItems.filter(item => item.id !== itemId)

      setFavoriteItems(updatedFavorites)

      Cookies.set('favorites', JSON.stringify(updatedFavorites), {
        expires: 30,
        path: '/',
        sameSite: 'strict'
      })
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to remove item from favorites'
      )
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className='container'>Loading...</div>
      </Layout>
    )
  }

  if (error || favoriteItems.length === 0) {
    return (
      <Layout>
        <div className={styles.Layout}>
          <h1 className={styles.title}>Похоже у вас нет ничего в избранном.</h1>
          <p className={styles.subtitle}>Добавьте товары из каталога.</p>
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
        <Title>Избранное</Title>
        {favoriteItems.map(item => {
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
                {item.product.price} <span>₽</span>
              </div>
              <button
                className={styles.delete}
                onClick={() => removeFromFavorite(item.id)}
                aria-label={`Удалить ${item.product.name} из избранного`}
              >
                <img
                  src='/images/icons/close.svg'
                  alt='Удалить из избранного'
                />
              </button>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Favorite
