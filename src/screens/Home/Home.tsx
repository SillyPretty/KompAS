import Layout from '../../components/Layout/Layout'
import Slider from '../../components/Slider/Slider'

import styles from './Home.module.scss'
import HomeSlider from './HomeSlider/HomeSlider'
import Promo from './Promo/Promo'

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Layout>
        <HomeSlider />
        <Slider />
        <Promo />
      </Layout>
    </div>
  )
}

export default Home
