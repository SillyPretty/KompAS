import '/node_modules/swiper/swiper-bundle.min.css'
import { FC } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '../../../ui/Button/Button'

import styles from './HomeSlider.module.scss'

const HomeSlider: FC = () => {
  return (
    <section className={styles.slider__wrap}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination
        autoplay={{ delay: 8000, pauseOnMouseEnter: true }}
      >
        <SwiperSlide>
          <div className={styles.slider__container}>
            <div className={styles.slider__text_wrap}>
              <h1 className={styles.slider__title}>
                <span className={styles.slider__title_color}>IPHONE 16</span>
                <span> уже в продаже!</span>
              </h1>
              <div className={styles.slider__description}>
                Успей приобрести нужный для себя цвет.
              </div>
              <Button size='large'>Перейти</Button>
            </div>
            <div className={styles.slider__img}>
              <img src='/images/slider_back/iPhone-16.png' alt='Iphone-16' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider_center__container}>
            <h1 className={styles.slider__title}>
              <span className={styles.slider__title_color}>Полезный</span>
              <span> друг для вашей семьи!</span>
            </h1>
            <div className={styles.slider__description}>
              Уберёт и помоет в считанные минуты.
            </div>
            <div className={styles.slider__img}>
              <img src='/images/slider_back/robot.png' alt='robot' />
            </div>
            <Button size='large'>Перейти</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slider__container}>
            <div className={styles.slider__img}>
              <img src='/images/slider_back/Video_card.png' alt='Video_card' />
            </div>
            <div className={styles.slider_right__text_wrap}>
              <h1 className={styles.slider__title}>
                <span className={styles.slider__title_color}>Играйте</span>
                <span> в любимые игры с кайфом!</span>
              </h1>
              <div className={styles.slider__description}>
                Прочувствуйте скорость и красочность картинки.
              </div>
              <Button size='large'>Перейти</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HomeSlider
