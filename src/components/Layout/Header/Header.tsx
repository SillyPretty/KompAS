import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className='container'>
      <nav className={styles.menu}>
        <ul className={styles.menu_nav}>
          <li>Акции</li>
          <li>Магазины</li>
          <li>Доставка</li>
        </ul>
        <Link to='/'>
          <img src='/images/logo/logo.svg' alt='logo' />
        </Link>
        <ul className={styles.menu_link}>
          <li>8(999)999-99-99</li>
          <li>
            <img src='/images/icons/telegram_icon.svg' alt='telegram_icon' />
          </li>
          <li>
            <img src='/images/icons/tik_tok_icon.svg' alt='tik_tok_icon' />
          </li>
          <li>
            <img src='/images/icons/vk_icon.svg' alt='vk_icon' />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
