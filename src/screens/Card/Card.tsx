import { FC } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/Layout/Layout'

import styles from './Card.module.scss'

const Card: FC = () => {
  const { id } = useParams()
  return <Layout><div className={styles.wrap}>{id}</div></Layout>
}

export default Card
