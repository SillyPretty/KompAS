import clsx from 'clsx'
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import MyMapComponent from '../../components/Map/Map'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'

import { fakeData } from '../Home/Home'

import styles from './Card.module.scss'

const colors = ['#000000', '#F6F6F6', '#00083D', '#FFE8AA']

const Card: FC = () => {
  const { id } = useParams()
  const [change, setChange] = useState(1)

  const data = {
    id: 'fake-1',
    name: 'Смартфон Apple iPhone 15 Pro 128 ГБ Dual SIM',
    description: 'Latest iPhone with advanced features',
    price: 124000,
    category: 'PHONE',
    stock: 50,
    image: 'https://example.com/iphone15.jpg',
    specifications: [
      {
        title: 'Операционная система',
        content: 'iOS 17'
      },
      {
        title: 'Процессор',
        content: 'A17 Pro'
      },
      {
        title: 'Оперативная память',
        content: '8 GB'
      },
      {
        title: 'Память',
        content: '256 GB'
      }
    ]
  }

  const [activeColor, setActiveColor] = useState(0)

  return (
    <Layout>
      <div className={styles.container}>
        <img src='/images/iPhone-16.png' alt='image' />
        <div className={styles.content}>
          <Title position='left'>{data.name}</Title>
          <div className={styles.color__container}>
            <div>Цвет:</div>
            <div className={styles.color__change}>
              {colors.map((item, index) => (
                <div
                  key={index}
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
              {data.price} <span>₽</span>
            </div>
            <Button size='large'>В корзину</Button>
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
              {data.specifications.map((item, index) => (
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
      <div className={styles.container__}>
        <Slider title='Похожие товары' data={fakeData} />
      </div>
    </Layout>
  )
}

export default Card
