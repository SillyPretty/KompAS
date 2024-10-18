import Layout from '../../components/Layout/Layout'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'

import HomeSlider from './HomeSlider/HomeSlider'
import Promo from './Promo/Promo'

const Home = () => {
  return (
    <Layout>
      <HomeSlider />
      <Title position='center'>Хиты продаж</Title>
      <Slider />
      <Promo />
    </Layout>
  )
}

export default Home
