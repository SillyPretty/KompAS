import Button from '../Button/Button'
import Title from '../Title/Title'

import styles from './SuccessPay.module.scss'

const SuccessPay = () => {
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 2)

  const formattedDate = deliveryDate
    .toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
    .replace(/\./g, '.')

  return (
    <>
      <Title position='center'>Спасибо за ваш заказ!</Title>
      <div className={styles.order__content}>
        Ваш заказ был успешно оплачен. Ожидайте его <span>{formattedDate}</span>{' '}
        по адресу: <span>г. Донской, Комсомольская улица, 22</span>. Как только
        заказ будет доставлен, вам придёт
        <span> СМС-уведомление.</span>
      </div>
      <div className={styles.button}>
        <Button size='large' onClick={() => window.location.reload()}>
          Назад
        </Button>
      </div>
    </>
  )
}

export default SuccessPay
