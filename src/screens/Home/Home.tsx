import Layout from '../../components/Layout/Layout'
import Slider from '../../components/Slider/Slider'

import styles from './Home.module.scss'
import HomeSlider from './HomeSlider/HomeSlider'
import Promo from './Promo/Promo'

export const fakeData = [
  {
    id: 'fake-1',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced features',
    price: 124000,
    category: 'PHONE',
    stock: 50,
    image: '/images/iPhone-16.png',
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
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'fake-2',
    name: 'MacBook Pro M2',
    description: 'Powerful laptop with M2 chip',
    price: 129999,
    category: 'LAPTOP',
    stock: 30,
    image: '/images/pilesos.png',
    specifications: [
      {
        title: 'Операционная система',
        content: 'macOS Sonoma'
      },
      {
        title: 'Процессор',
        content: 'Apple M2'
      },
      {
        title: 'Оперативная память',
        content: '16 GB'
      },
      {
        title: 'Память',
        content: '512 GB SSD'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'fake-3',
    name: 'RTX 4080',
    description: 'High-end graphics card',
    price: 79999,
    category: 'PC_COMPONENT',
    stock: 15,
    image: '/images/card.png',
    specifications: [
      {
        title: 'Графический процессор',
        content: 'NVIDIA Ada Lovelace'
      },
      {
        title: 'Память',
        content: '16 GB GDDR6X'
      },
      {
        title: 'Частота памяти',
        content: '22.4 Gbps'
      },
      {
        title: 'Разъем питания',
        content: '16-pin PCIe 5.0'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'fake-4',
    name: 'iPad Pro',
    description: '12.9-inch iPad Pro with M2 chip',
    price: 89999,
    category: 'TABLET',
    stock: 25,
    image: '/images/card.png',
    specifications: [
      {
        title: 'Операционная система',
        content: 'iPadOS 17'
      },
      {
        title: 'Процессор',
        content: 'Apple M2'
      },
      {
        title: 'Оперативная память',
        content: '8 GB'
      },
      {
        title: 'Дисплей',
        content: '12.9-inch Liquid Retina XDR'
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Layout>
        <HomeSlider />
        <Slider title='Хиты продаж' data={fakeData} />
        <Promo />
      </Layout>
    </div>
  )
}

export default Home
