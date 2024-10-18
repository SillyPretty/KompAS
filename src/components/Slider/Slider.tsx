import '/node_modules/swiper/swiper-bundle.min.css'
import { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Slider.module.scss'

interface ISlider {}

const data = [
  {
    id: 0,
    title: 'Iphone 15',
    description: '256 GB Чёрный',
    cost: 124000,
    image: '/images/iPhone-16.png'
  },
  {
    id: 1,
    title: 'Samsung H235',
    description: 'Робот-пылесос',
    cost: 15000,
    image: '/images/pilesos.png'
  },
  {
    id: 2,
    title: 'RTX 4060',
    description: 'Видеокарта MSI GeForce',
    cost: 48000,
    image: '/images/card.png'
  }
]

const Slider: FC<ISlider> = () => {
  return (
    <div className='container'>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        pagination
      >
        {data.map(product => (
          <SwiperSlide key={product.id}>
            <div className={styles.card}>
              <div className={styles.favorite}>
                <button>
                  <img src='/icons/Favorite.svg' alt='Favorite' />
                </button>
              </div>
              <div className={styles.image}>
                <img src={product.image} alt={product.title} />
              </div>
              <p className={styles.wrap__title}>
                <span className={styles.description}>
                  {product.description}
                </span>
                <span className={styles.title}>{product.title}</span>
              </p>
              <div className={styles.wrap__add}>
                <p className={styles.cost__wrap}>
                  <span className={styles.cost}>{product.cost}</span>
                  <span className={styles.currency}>₽</span>
                </p>
                <button className={styles.button__add}>
                  <img src='/icons/Plus.svg' alt='Plus' />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
