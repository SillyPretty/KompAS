import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import Header from '../Header/Header'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Header />
      <div className={styles.footer_mail}>
        <p className={styles.footer_description}>
          Подпишись на рассылку, чтобы быть в курсе всех событий
        </p>
        <Input
          type='text'
          placeholder='E-mail'
          className={styles.footer_input}
        />
        <Button size='normal'>Подписаться</Button>
      </div>
    </footer>
  )
}

export default Footer
