import '/node_modules/swiper/swiper-bundle.min.css'
import Cookies from 'js-cookie'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { $axios } from '../../api'
import { IData } from '../../interface/interface'
import Title from '../Title/Title'

import styles from './Slider.module.scss'

interface ISlider {
  title: string
  data: IData[]
}

interface CartItem {
  productId: string
  inCart: boolean
}

interface FavoriteItem {
  product: IData
  isFavorite: boolean
}

const Slider: FC<ISlider> = ({ title, data }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([])

  // Load initial state from cookies
  useEffect(() => {
    const cartCookie = Cookies.get('cart')
    const favoritesCookie = Cookies.get('favorites')

    if (cartCookie) {
      setCartItems(JSON.parse(cartCookie))
    }

    if (favoritesCookie) {
      setFavoriteItems(JSON.parse(favoritesCookie))
    }
  }, [])

  const addToCart = async (productId: string) => {
    try {
      await $axios.post('/cart/', { productId, quantity: 1 })

      const updatedCart = [
        ...cartItems.filter(item => item.productId !== productId),
        { productId, inCart: true }
      ]

      setCartItems(updatedCart)
      Cookies.set('cart', JSON.stringify(updatedCart), {
        expires: 30,
        path: '/'
      })
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  const toggleFavorite = (product: IData, e: React.MouseEvent) => {
    e.preventDefault()

    const existingIndex = favoriteItems.findIndex(
      item => item.product.id === product.id
    )
    let updatedFavorites: FavoriteItem[] = []

    if (existingIndex >= 0) {
      // Remove existing favorite
      updatedFavorites = [
        ...favoriteItems.slice(0, existingIndex),
        ...favoriteItems.slice(existingIndex + 1)
      ]
    } else {
      // Add new favorite with full product data
      updatedFavorites = [...favoriteItems, { product, isFavorite: true }]
    }

    setFavoriteItems(updatedFavorites)
    Cookies.set('favorites', JSON.stringify(updatedFavorites), {
      expires: 30,
      path: '/'
    })
  }

  const isInCart = (productId: string) => {
    return cartItems.some(item => item.productId === productId && item.inCart)
  }

  const isFavorite = (productId: string) => {
    return favoriteItems.some(item => item.product.id === productId)
  }

  return (
    <div className='container'>
      <Title position='center'>{title}</Title>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        // pagination
      >
        {data.map((product, index) => (
          <SwiperSlide key={index}>
            <Link to={`/card/${product.id}`}>
              <div className={styles.card}>
                <button
                  className={styles.favorite}
                  onClick={e => toggleFavorite(product, e)}
                >
                  <img
                    src={
                      isFavorite(product.id)
                        ? '/images/icons/Favorite.svg'
                        : '/images/icons/FavoriteFilled.svg'
                    }
                    alt={
                      isFavorite(product.id)
                        ? 'Add to favorites'
                        : 'Remove from favorites'
                    }
                  />
                </button>
                <div className={styles.image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.wrap__title}>
                  <div className={styles.description}>
                    {product.description}
                  </div>
                  <div className={styles.title}>{product.name}</div>
                </div>
                <div className={styles.wrap__add}>
                  <p className={styles.cost__wrap}>
                    <span className={styles.cost}>{product.price}</span>
                    <span className={styles.currency}>₽</span>
                  </p>
                </div>
              </div>
            </Link>
            <button
              className={styles.button__add}
              onClick={() => addToCart(product.id)}
            >
              <img
                src={
                  isInCart(product.id)
                    ? '/images/icons/Checkmark.svg'
                    : '/images/icons/Plus.svg'
                }
                alt={isInCart(product.id) ? 'In cart' : 'Add to cart'}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
