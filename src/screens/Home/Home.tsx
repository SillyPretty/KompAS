import { useEffect, useState } from 'react'

import Layout from '../../components/Layout/Layout'
import Slider from '../../components/Slider/Slider'

import { IProduct } from '../../interface/interface'
import { ProductService } from '../../services/product.service'

import styles from './Home.module.scss'
import HomeSlider from './HomeSlider/HomeSlider'
import Promo from './Promo/Promo'

const Home = () => {
  const [popularProducts, setPopularProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const data = await ProductService.getPopular()
        setPopularProducts(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchPopularProducts()
  }, [])

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

  return (
    <div className={styles.home_container}>
      <Layout>
        <HomeSlider />
        <Slider title='Хиты продаж' data={popularProducts} />
        <Promo />
      </Layout>
    </div>
  )
}

export default Home
