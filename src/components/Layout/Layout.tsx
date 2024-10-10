import { PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

interface ILayout {}

const Layout = ({ children }: PropsWithChildren<ILayout>) => {
  return (
    <div className={styles.layout_wrap}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
