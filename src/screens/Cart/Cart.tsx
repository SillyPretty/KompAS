import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import Title from '../../components/Title/Title'

import { fakeData } from '../Home/Home'

import styles from './Cart.module.scss'

const Cart = () => {
  const totalPrice = fakeData.reduce((sum, item) => sum + item.price, 0)

  return (
    <Layout>
      {fakeData ? (
        <div className={styles.container}>
          <Title>Корзина</Title>
          {fakeData.map((item, index) => (
            <div className={styles.container__card} key={index}>
              <div className={styles.image}>
                <img src={item.image} alt={item.image} />
              </div>
              <div className={styles.card__body}>
                <div className={styles.card__title}>{item.name}</div>
                <div>
                  {item.specifications.map((specification, index) => (
                    <div
                      className={clsx(
                        styles.card__container,
                        index >= 3 && styles.none
                      )}
                      key={index}
                    >
                      <div className={styles.title}>{specification.title}</div>
                      <div className={styles.content}>
                        {specification.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.price}>
                {item.price} <span>₽</span>
              </div>
              <button className={styles.delete}>
                <img src='/images/icons/close.svg' alt='close.svg' />
              </button>
            </div>
          ))}
          <div className={styles.price__container}>
            <div className={styles.price}>
              {totalPrice}
              <span> ₽</span>
            </div>
            <Button size='normal'>Оплатить</Button>
          </div>
        </div>
      ) : (
        <div className={styles.Layout}>
          <h1 className={styles.title}>Похоже корзина пуста.</h1>
          <p className={styles.subtitle}>Добавьте в неё товары из каталога.</p>
          <Button size='large'>
            <Link to={'/'}>В каталог</Link>
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default Cart
