import Layout from '../../components/Layout/Layout'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'

import HomeSlider from './HomeSlider/HomeSlider'

const Home = () => {
  return (
    <Layout>
      <HomeSlider />
      <Title position='center'>Хиты продаж</Title>
      <Slider products={[]} />
    </Layout>
  )
}

export default Home
