import Title from '../../../components/Title/Title'

import Button from '../../../ui/Button/Button'

import styles from './Promo.module.scss'

const Promo = () => {
  return (
    <div className='container'>
      <Title position='center'>Свежие акции</Title>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.main__card}>
            <div className={styles.main__card_wrap}>
              <h2 className={styles.main__card_title}>
                Keep<span className={styles.color__focused}>&</span>Play
              </h2>
              <div className={styles.main__card_description}>
                Комплект игрового компьютера
              </div>
            </div>
            <div className={styles.main__card_image}>
              <img src='/images/pc.png' alt='PC' />
            </div>
            <div className={styles.main__card_cost_wrapper}>
              <div className={styles.main__card_discount}>240999 ₽</div>
              <div className={styles.main__card_cost}>
                129999 <span className={styles.color__focused}>₽</span>
              </div>
              <Button size='large'>Подробнее</Button>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.second__card}>
            <div className={styles.second__card_wrap}>
              <div className={styles.second__card_wrap_title}>
                <h2 className={styles.second__card_title}>
                  Вместе<span className={styles.color__focused}>-</span>дешевле
                </h2>
                <div className={styles.second__card_description}>
                  Комплект смартфон
                  <span className={styles.color__focused}>-</span>часы
                </div>
              </div>
              <div className={styles.second__card_cost_wrap}>
                <div className={styles.second__card_cost}>
                  129999 <span className={styles.color__focused}>₽</span>
                </div>
                <Button size='normal'>Подробнее</Button>
              </div>
            </div>
            <div className={styles.second__image}>
              <img src='/images/Smartphone_watch.png' alt='Smartphone_watch' />
            </div>
          </div>
          <div className={styles.card__wrapper}>
            <div className={styles.card}>
              <h3 className={styles.card__discount}>
                Скидка <span className={styles.color__focused}>30%</span>
              </h3>
              <h4 className={styles.card__title}>
                Телевизор
                <span className={styles.color__focused}> Samsung J5200</span>
              </h4>
              <div className={styles.card__image}>
                <img src='/images/tv.png' alt='TV' />
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__cost_wrapper}>
                  <div className={styles.card__cost_discount}>39999 ₽</div>
                  <div className={styles.card__cost}>
                    27999 <span className={styles.color__focused}>₽</span>
                  </div>
                </div>
                <Button size='small'>Подробнее</Button>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card__discount}>
                Скидка <span className={styles.color__focused}>50%</span>
              </h3>
              <h4 className={styles.card__title}>
                Стирально-сушильная машина
                <span className={styles.color__focused}> LG TW4V9BC9E</span>
              </h4>
              <div className={styles.card__image}>
                <img src='/images/machine.png' alt='machine' />
              </div>
              <div className={styles.card__bottom}>
                <div className={styles.card__cost_wrapper}>
                  <div className={styles.card__cost_discount}>79990 ₽</div>
                  <div className={styles.card__cost}>
                    39995 <span className={styles.color__focused}>₽</span>
                  </div>
                </div>
                <Button size='small'>Подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
