import clsx from 'clsx'
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'

import styles from './Card.module.scss'

const colors = ['#000000', '#F6F6F6', '#00083D', '#FFE8AA']

const Card: FC = () => {
  const { id } = useParams()

  const [activeColor, setActiveColor] = useState(0)

  return (
    <Layout>
      <div className={styles.container}>
        <img src='/images/iPhone-16.png' alt='image' />
        <div className={styles.content}>
          <Title className={styles.title} position='left'>
            Смартфон <span>Apple iPhone 15 Pro 128 ГБ</span> Dual SIM титановый
            чёрный
          </Title>
          <div className={styles.color__container}>
            <div>Цвет:</div>
            <div className={styles.color__change}>
              {colors.map((item, index) => (
                <div
                  className={clsx(
                    styles.color__item,
                    index === activeColor && styles.color__item_active
                  )}
                  onClick={() => setActiveColor(index)}
                  style={{
                    background: item
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.price__container}>
            <div className={styles.price}>
              124000 <span>₽</span>
            </div>
            <Button size='large'>В корзину</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Card
