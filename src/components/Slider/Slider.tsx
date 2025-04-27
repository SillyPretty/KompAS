import '/node_modules/swiper/swiper-bundle.min.css'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IData } from '../../interface/interface'
import Title from '../Title/Title'

import styles from './Slider.module.scss'

interface ISlider {
  title: string
  data: IData[]
}

const Slider: FC<ISlider> = ({ title, data }) => {
  return (
    <div className='container'>
      <Title position='center'>{title}</Title>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        pagination
      >
        {data.map(product => (
          <SwiperSlide key={product.id}>
            <Link to={`/card/${product.id}`}>
              <div className={styles.card}>
                <button className={styles.favorite}>
                  <img src='/images/icons/Favorite.svg' alt='Favorite' />
                </button>
                <div className={styles.image}>
                  <img src={product.image} alt={product.image} />
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
            <button className={styles.button__add}>
              <img src='/images/icons/Plus.svg' alt='Plus' />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
