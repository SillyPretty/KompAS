import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'

import styles from './Error.module.scss'

const Error = () => {
  return (
    <Layout>
      <div className={styles.Layout}>
        <h1 className={styles.title}>Ошибка 404</h1>
        <p className={styles.subtitle}>Похоже такой страницы не существует..</p>
        <Button size='large'>
          <Link to={'/'}>На главную</Link>
        </Button>
      </div>
    </Layout>
  )
}

export default Error
