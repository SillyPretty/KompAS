import { PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import Search from './Search/Search'

interface ILayout {}

const Layout = ({ children }: PropsWithChildren<ILayout>) => {
  return (
    <div className={styles.layout_wrap}>
      <Header />
      <Search />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
